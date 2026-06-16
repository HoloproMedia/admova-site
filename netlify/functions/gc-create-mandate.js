// POST /.netlify/functions/gc-create-mandate
const GC_BASE = process.env.GC_ENVIRONMENT === 'live'
  ? 'https://api.gocardless.com'
  : 'https://api-sandbox.gocardless.com';

function json(status, obj) {
  return { statusCode: status, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(obj) };
}
async function getUser(authHeader) {
  if (!authHeader) return null;
  const token = authHeader.replace(/^Bearer\s+/i, '');
  const r = await fetch(process.env.SUPABASE_URL + '/auth/v1/user', {
    headers: { apikey: process.env.SUPABASE_SECRET_KEY, Authorization: 'Bearer ' + token }
  });
  if (!r.ok) return null;
  return r.json();
}
async function upsertClient(email, authId) {
  await fetch(process.env.SUPABASE_URL + '/rest/v1/clients?on_conflict=email', {
    method: 'POST',
    headers: {
      apikey: process.env.SUPABASE_SECRET_KEY,
      Authorization: 'Bearer ' + process.env.SUPABASE_SECRET_KEY,
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=minimal'
    },
    body: JSON.stringify({ email: email, auth_user_id: authId, mandate_status: 'pending' })
  });
}
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });
  try {
    const auth = event.headers.authorization || event.headers.Authorization;
    const user = await getUser(auth);
    if (!user || !user.email) return json(401, { error: 'Non authentifié' });

    let siteUrl = ('https://' + (event.headers.host || '')).replace(/\/+$/, '');
    if (siteUrl === 'https://') siteUrl = (process.env.SITE_URL || 'https://admova.fr').replace(/\/+$/, '');

    const brRes = await fetch(GC_BASE + '/billing_requests', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + process.env.GC_ACCESS_TOKEN,
        'GoCardless-Version': '2015-07-06',
        'Content-Type': 'application/json',
        'Idempotency-Key': 'br-' + user.id + '-' + Date.now()
      },
      body: JSON.stringify({
        billing_requests: {
          mandate_request: { currency: 'EUR', metadata: { admova_email: user.email } }
        }
      })
    });
    const br = await brRes.json();
    if (!brRes.ok) { console.error('GC billing_requests', brRes.status, JSON.stringify(br)); return json(502, { error: 'Erreur GoCardless (billing_requests)', detail: br }); }
    const brId = br.billing_requests.id;

    const flowRes = await fetch(GC_BASE + '/billing_request_flows', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + process.env.GC_ACCESS_TOKEN,
        'GoCardless-Version': '2015-07-06',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        billing_request_flows: {
          redirect_uri: siteUrl + '/?mandat=ok',
          exit_uri: siteUrl + '/?mandat=annule',
          links: { billing_request: brId }
        }
      })
    });
    const flow = await flowRes.json();
    if (!flowRes.ok) { console.error('GC billing_request_flows', flowRes.status, JSON.stringify(flow)); return json(502, { error: 'Erreur GoCardless (billing_request_flows)', detail: flow }); }

    try { await upsertClient(user.email, user.id); } catch (e) {}

    return json(200, { redirect_url: flow.billing_request_flows.authorisation_url });
  } catch (e) {
    console.error('gc-create-mandate', String(e));
    return json(500, { error: String(e) });
  }
};

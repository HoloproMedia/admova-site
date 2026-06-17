// GET /.netlify/functions/evoliz-invoices (authentifié)
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

exports.handler = async (event) => {
  try {
    const auth = event.headers.authorization || event.headers.Authorization;
    const user = await getUser(auth);
    if (!user || !user.email) return json(401, { error: 'Non authentifié' });

    // Récupérer le evoliz_client_id depuis Supabase
    const r = await fetch(
      process.env.SUPABASE_URL + '/rest/v1/clients?email=eq.' + encodeURIComponent(user.email) + '&select=evoliz_client_id',
      { headers: { apikey: process.env.SUPABASE_SECRET_KEY, Authorization: 'Bearer ' + process.env.SUPABASE_SECRET_KEY } }
    );
    const rows = await r.json();
    const evolizId = rows && rows[0] && rows[0].evoliz_client_id;
    if (!evolizId) return json(200, { invoices: [] });

    // Récupérer les factures depuis Evoliz
    const evoRes = await fetch('https://app.evoliz.com/api/v1/invoices?client_code=' + evolizId, {
      headers: {
        'Authorization': 'Bearer ' + process.env.EVOLIZ_API_KEY,
        'Content-Type': 'application/json'
      }
    });
    const evoData = await evoRes.json();
    return json(200, { invoices: evoData.data || evoData || [] });
  } catch (e) {
    return json(500, { error: String(e) });
  }
};

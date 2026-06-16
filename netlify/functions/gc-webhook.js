// POST /.netlify/functions/gc-webhook  (public, vérifié par signature HMAC)
const crypto = require('crypto');
const GC_BASE = process.env.GC_ENVIRONMENT === 'live'
  ? 'https://api.gocardless.com'
  : 'https://api-sandbox.gocardless.com';

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method not allowed' };
  let raw = event.body || '';
  if (event.isBase64Encoded) { try { raw = Buffer.from(raw, 'base64').toString('utf8'); } catch (e) {} }
  const sig = event.headers['webhook-signature'] || event.headers['Webhook-Signature'];
  const secret = process.env.GC_WEBHOOK_SECRET || '';
  try {
    const computed = crypto.createHmac('sha256', secret).update(raw).digest('hex');
    if (!sig || computed.length !== sig.length ||
        !crypto.timingSafeEqual(Buffer.from(computed), Buffer.from(sig))) {
      return { statusCode: 498, body: 'Invalid signature' };
    }
  } catch (e) {
    return { statusCode: 498, body: 'Invalid signature' };
  }
  let payload;
  try { payload = JSON.parse(raw); } catch (e) { return { statusCode: 400, body: 'Bad JSON' }; }
  const events = (payload && payload.events) || [];
  for (const ev of events) {
    try {
      if (ev.resource_type === 'mandates') {
        const mandateId = ev.links && ev.links.mandate;
        let status = null;
        if (ev.action === 'active') status = 'active';
        else if (ev.action === 'failed') status = 'failed';
        else if (ev.action === 'cancelled' || ev.action === 'expired') status = 'cancelled';
        if (status && mandateId) {
          const mRes = await fetch(GC_BASE + '/mandates/' + mandateId, {
            headers: { Authorization: 'Bearer ' + process.env.GC_ACCESS_TOKEN, 'GoCardless-Version': '2015-07-06' }
          });
          const m = await mRes.json();
          const md = m && m.mandates && m.mandates.metadata;
          const email = md && md.admova_email;
          const customer = m && m.mandates && m.mandates.links && m.mandates.links.customer;
          if (email) {
            await fetch(process.env.SUPABASE_URL + '/rest/v1/clients?email=eq.' + encodeURIComponent(email), {
              method: 'PATCH',
              headers: {
                apikey: process.env.SUPABASE_SECRET_KEY,
                Authorization: 'Bearer ' + process.env.SUPABASE_SECRET_KEY,
                'Content-Type': 'application/json',
                Prefer: 'return=minimal'
              },
              body: JSON.stringify({ mandate_status: status, gc_mandate_id: mandateId, gc_customer_id: customer || null })
            });
          }
        }
      }
      await fetch(process.env.SUPABASE_URL + '/rest/v1/webhook_events', {
        method: 'POST',
        headers: {
          apikey: process.env.SUPABASE_SECRET_KEY,
          Authorization: 'Bearer ' + process.env.SUPABASE_SECRET_KEY,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal'
        },
        body: JSON.stringify({ gc_event_id: ev.id, type: (ev.resource_type || '') + '.' + (ev.action || ''), payload: ev })
      });
    } catch (e) { /* on continue */ }
  }
  return { statusCode: 200, body: 'OK' };
};

// GET /.netlify/functions/mandate-status  (authentifié)
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
    const r = await fetch(
      process.env.SUPABASE_URL + '/rest/v1/clients?email=eq.' +
      encodeURIComponent(user.email) + '&select=mandate_status',
      { headers: { apikey: process.env.SUPABASE_SECRET_KEY, Authorization: 'Bearer ' + process.env.SUPABASE_SECRET_KEY } }
    );
    const rows = await r.json();
    const status = (rows && rows[0] && rows[0].mandate_status) || 'pending';
    return json(200, { status });
  } catch (e) {
    return json(500, { error: String(e) });
  }
};

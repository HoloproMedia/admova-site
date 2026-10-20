/* ------------------------------------------------------------------
   Admova — pixel de mesure ChatGPT Ads (OpenAI) + consentement
   Chargé en tête de <head> sur toutes les pages, après Google Tag Manager.
   Indépendant de GTM : ne lit ni ne modifie la balise Google.

   Documentation suivie : https://developers.openai.com/ads/measurement-pixel
   - consentement : oaiq("consent", false) AVANT init, puis true après accord
   - événements standard : page_viewed (contents), lead_created (customer_action)
   - événement personnalisé : "custom" + custom_event_name
   ------------------------------------------------------------------ */
(function () {
  if (window.__admovaOaiq) return;           // jamais deux fois sur une page
  window.__admovaOaiq = true;

  var PIXEL_ID = 'UaQk2H6VXxLYanBPMCPPF8';
  var DEBUG = true;                          // à passer à false après vos tests
  var KEY = 'admova_consent';                // 'granted' | 'denied'

  /* 1. Code officiel d'installation (inchangé) */
  !function(w,d,s,u){
    if(w.oaiq)return;
    var q=function(){q.q.push(arguments)};
    q.q=[];
    w.oaiq=q;
    var j=d.createElement(s);
    j.async=1;
    j.src=u;
    var f=d.getElementsByTagName(s)[0];
    f.parentNode.insertBefore(j,f)
  }(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");

  /* 2. Consentement : refusé par défaut tant que le visiteur n'a pas accepté */
  var choice = null;
  try { choice = localStorage.getItem(KEY); } catch (e) {}
  oaiq('consent', choice === 'granted');
  oaiq('init', { pixelId: PIXEL_ID, debug: DEBUG });

  var granted = function () { return choice === 'granted'; };

  /* 3. Pages stratégiques : page_viewed */
  var STRATEGIC = {
    '': 'Accueil', 'notre-solution': 'Notre solution', 'comment-ca-marche': 'Comment ça marche',
    'rendez-vous': 'Demande d’étude', 'pour-qui': 'Pour qui', 'secteurs': 'Secteurs',
    'tpe-pme': 'TPE et PME', 'franchises': 'Franchises et réseaux', 'grands-comptes': 'Grands comptes'
  };
  var slug = (function () {
    var p = decodeURIComponent(location.pathname || '/').replace(/\/+$/, '');
    var last = p.split('/').pop() || '';
    last = last.replace(/\.dc\.html$|\.html$/, '');
    if (last === 'index') last = (p.split('/').slice(-2, -1)[0] || '');
    return last === 'Landing Admova' ? '' : last;
  })();
  var viewed = false;
  function sendPageView() {
    if (viewed || !granted() || !(slug in STRATEGIC)) return;
    viewed = true;
    oaiq('measure', 'page_viewed', {
      type: 'contents',
      contents: [{ id: slug || 'accueil', name: STRATEGIC[slug], content_type: 'page' }]
    });
  }
  sendPageView();

  /* Lien « Gérer les cookies » du pied de page */
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest && e.target.closest('a[href="#cookies"]');
    if (!a) return;
    e.preventDefault();
    window.admovaOpenConsent();
  }, true);

  /* 4. Clics sur les boutons de contact (événement personnalisé) */
  var lastClick = 0;
  document.addEventListener('click', function (e) {
    if (!granted()) return;
    var el = e.target && e.target.closest && e.target.closest('a, button');
    if (!el) return;
    var href = el.getAttribute('href') || '';
    var label = (el.textContent || '').toLowerCase();
    var isContact = /rendez-vous/.test(href) || label.indexOf('étude gratuite') !== -1 || label.indexOf('nous contacter') !== -1;
    if (!isContact || el.closest('form')) return;        // l'envoi du formulaire n'est pas un clic CTA
    var now = Date.now();
    if (now - lastClick < 1500) return;                   // anti double-clic
    lastClick = now;
    oaiq('measure', 'custom', { type: 'custom' }, { custom_event_name: 'contact_cta_clicked' });
  }, true);

  /* 5. Lead : appelé par les formulaires UNIQUEMENT sur réponse serveur OK */
  var sentLeads = {};
  window.admovaTrackLead = function () {
    if (!granted()) return;
    var id = 'lead_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
    if (sentLeads[id]) return;
    sentLeads[id] = true;
    oaiq('measure', 'lead_created', { type: 'customer_action' }, { event_id: id });
    // Conversion configurée dans Ads Manager sous le nom « formulaire »
    oaiq(
      "measure",
      "custom",
      { type: "custom" },
      { custom_event_name: "formulaire", event_id: id + '_formulaire' }
    );
  };

  /* 6. Bandeau de consentement — refuser aussi simple qu'accepter (CNIL) */
  function setChoice(v) {
    choice = v;
    try { localStorage.setItem(KEY, v); } catch (e) {}
    oaiq('consent', v === 'granted');
    if (v === 'granted') sendPageView();
    var b = document.getElementById('admova-consent');
    if (b) b.remove();
  }
  window.admovaOpenConsent = function () { try { localStorage.removeItem(KEY); } catch (e) {} choice = null; showBanner(); };

  function showBanner() {
    if (choice || document.getElementById('admova-consent')) return;
    var b = document.createElement('div');
    b.id = 'admova-consent';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-label', 'Préférences de mesure publicitaire');
    b.style.cssText = 'position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:720px;margin:0 auto;background:#FDF5EE;border:1px solid #E8E4DC;border-radius:12px;box-shadow:0 12px 32px -8px rgba(20,20,19,.18);padding:18px 20px;display:flex;flex-wrap:wrap;align-items:center;gap:14px 20px;font-family:Inter,ui-sans-serif,system-ui,sans-serif;color:#141413';
    b.innerHTML =
      '<p style="margin:0;flex:1 1 320px;font-size:14px;line-height:1.6;color:#5A5A5A">Nous mesurons l’efficacité de nos publicités avec des traceurs. Vous pouvez accepter ou refuser. <a href="/confidentialite/" style="color:#B8480F;text-decoration:underline;text-underline-offset:3px">En savoir plus</a></p>' +
      '<div style="display:flex;gap:10px;flex:none">' +
        '<button type="button" data-c="denied" style="font:inherit;font-size:14px;font-weight:600;padding:11px 18px;border-radius:8px;border:1px solid #141413;background:#fff;color:#141413;cursor:pointer">Refuser</button>' +
        '<button type="button" data-c="granted" style="font:inherit;font-size:14px;font-weight:600;padding:11px 18px;border-radius:8px;border:1px solid #D85A1A;background:#D85A1A;color:#fff;cursor:pointer">Accepter</button>' +
      '</div>';
    b.addEventListener('click', function (e) {
      var v = e.target && e.target.getAttribute && e.target.getAttribute('data-c');
      if (v) setChoice(v);
    });
    document.body.appendChild(b);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', showBanner);
  else showBanner();
})();

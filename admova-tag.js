/* ------------------------------------------------------------------
   Admova — balise Google Ads, Consent Mode v2 et suivi des conversions
   Chargé en tête de <head> sur les 22 pages, AVANT gtag.js.

   ┌─ À RENSEIGNER ──────────────────────────────────────────────────┐
   │ Remplacez CONVERSION_LABEL par l'étiquette de votre action de   │
   │ conversion, visible dans Google Ads :                           │
   │   Objectifs → Conversions → [votre action] → Configurer la      │
   │   balise → « Installer manuellement ».                          │
   │ Vous y lirez send_to: 'AW-18456938681/AbCdEfGhIjK'.             │
   │ Ne copiez que la partie après la barre oblique.                 │
   └─────────────────────────────────────────────────────────────────┘
   ------------------------------------------------------------------ */

(function () {
  'use strict';

  // Le <helmet> d'un Design Component peut être monté plusieurs fois.
  // Sans ce garde-fou, `config` partirait en double et Google compterait
  // deux pages vues par chargement.
  if (window.__admovaTagLoaded) return;
  window.__admovaTagLoaded = true;

  var ADS_ID = 'AW-18456938681';
  var CONVERSION_LABEL = '';          // ← collez l'étiquette ici
  var CONSENT_KEY = 'admova_consent_v1';
  var LEAD_FIRED_KEY = 'admova_lead_id';

  /* -- 1. dataLayer et gtag, définis avant tout ------------------- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  /* -- 2. Consent Mode v2 : tout refusé par défaut ----------------
     Obligatoire avant le chargement de gtag.js. `wait_for_update`
     laisse 500 ms à la réponse de l'utilisateur avant que la balise
     ne parte en mode dégradé (pings sans cookie).                  */
  var DENIED = {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  };
  var GRANTED = {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted'
  };

  // Hors Union européenne, la mesure reste complète par défaut.
  gtag('consent', 'default', DENIED);

  gtag('js', new Date());
  gtag('config', ADS_ID, { allow_enhanced_conversions: true });

  /* -- 3. Choix déjà exprimé ? ------------------------------------ */
  function readChoice() {
    try { return window.localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function writeChoice(v) {
    try { window.localStorage.setItem(CONSENT_KEY, v); } catch (e) {}
  }

  var choice = readChoice();
  if (choice === 'granted') gtag('consent', 'update', GRANTED);

  /* -- 4. Chargement de la balise --------------------------------- */
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ADS_ID;
  (document.head || document.documentElement).appendChild(s);

  /* -- 5. Bandeau de consentement ---------------------------------
     Injecté ici plutôt que dupliqué dans 22 pages : il doit
     s'afficher avant le rendu de l'application et rester identique
     partout. Refuser coûte un clic, exactement comme accepter
     (exigence CNIL).                                                */
  function banner() {
    if (readChoice()) return;
    if (document.getElementById('admova-consent')) return;

    var css = document.createElement('style');
    css.textContent = [
      '#admova-consent{position:fixed;left:0;right:0;bottom:0;z-index:2147483000;',
      'background:#FDF5EE;border-top:1px solid #E8E4DC;',
      'box-shadow:0 -8px 32px -12px rgba(20,20,19,.16);',
      "font-family:Archivo,ui-sans-serif,system-ui,sans-serif;color:#5A5A5A;",
      'animation:admovaConsentIn 200ms cubic-bezier(.22,.61,.36,1) both}',
      '@keyframes admovaConsentIn{from{transform:translateY(100%)}to{transform:none}}',
      '#admova-consent .ac-in{max-width:1280px;margin:0 auto;padding:20px 32px;',
      'display:flex;align-items:center;gap:28px;flex-wrap:wrap}',
      '#admova-consent .ac-tx{flex:1;min-width:260px;margin:0;font-size:14px;line-height:1.6;max-width:68ch}',
      '#admova-consent .ac-tx strong{color:#141413;font-weight:600}',
      '#admova-consent .ac-tx a{color:#B8480F;text-decoration:underline;text-underline-offset:3px}',
      '#admova-consent .ac-bt{display:flex;gap:10px;flex:none}',
      '#admova-consent button{font:inherit;font-size:14px;font-weight:600;line-height:1;',
      'border-radius:8px;padding:13px 22px;cursor:pointer;',
      'transition:background-color 140ms cubic-bezier(.22,.61,.36,1),border-color 140ms cubic-bezier(.22,.61,.36,1),color 140ms cubic-bezier(.22,.61,.36,1)}',
      '#admova-consent .ac-yes{background:#D85A1A;border:1px solid #D85A1A;color:#fff}',
      '#admova-consent .ac-yes:hover{background:#B8480F;border-color:#B8480F}',
      '#admova-consent .ac-yes:active{background:#9C3C0B}',
      '#admova-consent .ac-no{background:#fff;border:1px solid #E8E4DC;color:#141413}',
      '#admova-consent .ac-no:hover{border-color:#141413}',
      '#admova-consent button:focus-visible{outline:2px solid #D85A1A;outline-offset:2px}',
      '@media (max-width:767px){#admova-consent .ac-in{padding:16px 16px 18px;gap:14px}',
      '#admova-consent .ac-bt{width:100%}#admova-consent button{flex:1;padding:14px 12px}}',
      '@media (prefers-reduced-motion:reduce){#admova-consent{animation:none}}'
    ].join('');
    document.head.appendChild(css);

    var el = document.createElement('aside');
    el.id = 'admova-consent';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-label', 'Consentement aux cookies de mesure');
    el.innerHTML =
      '<div class="ac-in">' +
        '<p class="ac-tx"><strong>Nous mesurons l\u2019audience de ce site.</strong> ' +
        'Ces cookies nous servent uniquement \u00e0 savoir quelles campagnes am\u00e8nent des demandes ' +
        'd\u2019\u00e9tude de zone. Aucun profilage publicitaire de votre navigation. ' +
        '<a href="/mentions-legales">Politique de confidentialit\u00e9</a></p>' +
        '<div class="ac-bt">' +
          '<button type="button" class="ac-no">Refuser</button>' +
          '<button type="button" class="ac-yes">Accepter</button>' +
        '</div>' +
      '</div>';

    function close(v) {
      writeChoice(v);
      if (v === 'granted') gtag('consent', 'update', GRANTED);
      el.parentNode && el.parentNode.removeChild(el);
    }
    el.querySelector('.ac-yes').addEventListener('click', function () { close('granted'); });
    el.querySelector('.ac-no').addEventListener('click', function () { close('denied'); });
    document.body.appendChild(el);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', banner);
  } else {
    banner();
  }

  /* -- 6. Valeur du lead ------------------------------------------
     La valeur transmise permet aux enchères intelligentes de
     privilégier les demandes des gros budgets. Proxy volontairement
     prudent, fondé sur la tranche déclarée.                        */
  var VALUES = {
    'Moins de 1 000 \u20ac / mois': 500,
    '1 000 \u00e0 5 000 \u20ac / mois': 3000,
    '5 000 \u00e0 20 000 \u20ac / mois': 12000,
    'Plus de 20 000 \u20ac / mois': 30000,
    '\u00c0 d\u00e9finir ensemble': 3000
  };

  function phoneE164(v) {
    var d = String(v || '').replace(/[^\d+]/g, '');
    if (!d) return '';
    if (d.charAt(0) === '+') return d;
    if (d.indexOf('00') === 0) return '+' + d.slice(2);
    if (d.charAt(0) === '0') return '+33' + d.slice(1);
    return d.length === 9 ? '+33' + d : d;
  }

  /* -- 7. Conversion ---------------------------------------------- */
  window.admovaTrackLead = function (f) {
    f = f || {};
    var id;
    try {
      id = window.sessionStorage.getItem(LEAD_FIRED_KEY);
      if (id) return;                       // déjà comptée dans cette session
      id = 'lead-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
      window.sessionStorage.setItem(LEAD_FIRED_KEY, id);
    } catch (e) {
      id = 'lead-' + Date.now();
    }

    var value = VALUES[f.budget] || 3000;

    // Conversions améliorées : Google hache ces données dans le
    // navigateur, rien n'est transmis en clair.
    gtag('set', 'user_data', {
      email: String(f.email || '').trim().toLowerCase(),
      phone_number: phoneE164(f.tel),
      address: {
        first_name: String(f.prenom || '').trim().toLowerCase(),
        last_name: String(f.nom || '').trim().toLowerCase(),
        country: 'FR'
      }
    });

    if (CONVERSION_LABEL) {
      gtag('event', 'conversion', {
        send_to: ADS_ID + '/' + CONVERSION_LABEL,
        value: value,
        currency: 'EUR',
        transaction_id: id
      });
    } else if (window.console && console.info) {
      console.info('[Admova] Conversion non transmise : CONVERSION_LABEL vide dans admova-tag.js.');
    }

    // Événement recommandé, exploitable en import de conversion et en GA4.
    gtag('event', 'generate_lead', {
      value: value,
      currency: 'EUR',
      transaction_id: id,
      lead_source: 'formulaire_rappel',
      secteur: f.secteur || '',
      points_de_vente: f.sites || '',
      taille_entreprise: f.taille || '',
      page: (typeof location !== 'undefined' ? location.pathname : '')
    });
  };
})();

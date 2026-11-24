/* Formulaire de contact ScaleCity (« Site Internet »)
   Insère le formulaire dans <div id="scalecity-form-7dfc7521">, ajuste sa hauteur
   et compte la conversion quand ScaleCity signale un envoi. */
(function () {
  var ID = '7dfc7521';
  var ORIGIN = 'https://app.scalecity.fr';
  var SRC = ORIGIN + '/f/' + ID + '?embed=true';

  function frame() { return document.querySelector('#scalecity-form-' + ID + ' iframe'); }

  function mount() {
    var box = document.getElementById('scalecity-form-' + ID);
    if (!box || box.querySelector('iframe')) return;
    var f = document.createElement('iframe');
    f.src = SRC;
    f.title = 'Formulaire de demande d’étude gratuite';
    f.style.cssText = 'width:100%;border:none;min-height:600px;display:block;background:transparent;';
    f.setAttribute('loading', 'lazy');
    box.appendChild(f);
  }

  var counted = false;
  window.addEventListener('message', function (e) {
    if (e.origin !== ORIGIN) return;
    var d = e.data || {};
    if (d.formId && d.formId !== ID) return;
    if (d.type === 'scalecity-form-resize') {
      var f = frame();
      if (f && d.height) f.style.height = d.height + 'px';
    } else if (!counted && typeof d.type === 'string' && /submit|success|complete|sent/i.test(d.type)) {
      counted = true;
      if (typeof window.admovaTrackLead === 'function') window.admovaTrackLead();
    }
  });

  // Les pages sont affichées par JavaScript : on attend que l'emplacement apparaisse.
  new MutationObserver(mount).observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', mount);
  mount();
})();

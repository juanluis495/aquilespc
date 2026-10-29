/* AquilesPC · aquilespc.com */

/* ===== AJUSTES ===== Lo que normalmente hay que cambiar está aquí (ver README.md). */
var AJUSTES = {
  // ID de medición de Google Analytics 4 (empieza con G-). Mientras diga G-XXXXXXXXXX, Analytics no se carga.
  analyticsId: 'G-XXXXXXXXXX',

  // Número de WhatsApp con código de país, sin «+» ni espacios.
  whatsappNumero: '56934176783',

  // Mensaje que aparece ya escrito al abrir WhatsApp. Se escribe normal, con tildes y espacios.
  whatsappMensaje: 'Hola Aquiles, quiero agendar una sesión de orientación.',

  // Etiquetas amarillas de pendientes (.todo):
  //   'auto' = se ven al revisar la página (en tu computador o en una vista previa) y se ocultan en aquilespc.com
  //   'si'   = se ven siempre
  //   'no'   = no se ven nunca
  mostrarPendientes: 'auto'
};
/* ===== FIN DE LOS AJUSTES ===== */

(function () {
  'use strict';

  var root = document.documentElement;
  var host = location.hostname.replace(/^www\./, '');
  var esProduccion = host === 'aquilespc.com';
  var esLocal = location.protocol === 'file:' || host === 'localhost' || host === '127.0.0.1' || host === '[::1]';

  // Pendientes
  var ver = AJUSTES.mostrarPendientes;
  if (ver === 'si' || (ver === 'auto' && !esProduccion)) root.classList.add('ver-pendientes');

  // WhatsApp: todos los enlaces con data-whatsapp usan el número y el mensaje de AJUSTES.
  var wa = 'https://wa.me/' + AJUSTES.whatsappNumero + '?text=' + encodeURIComponent(AJUSTES.whatsappMensaje);
  Array.prototype.forEach.call(document.querySelectorAll('a[data-whatsapp]'), function (a) { a.href = wa; });

  // Google Analytics 4: solo con un ID real y fuera del computador local, para no contar las visitas de revisión.
  var gaId = AJUSTES.analyticsId;
  if (/^G-[A-Z0-9]+$/.test(gaId) && gaId !== 'G-XXXXXXXXXX' && !esLocal) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', gaId);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(gaId);
    document.head.appendChild(s);
  }

  // Medición de clics: cada enlace con data-track envía el evento contact_click con su link_id.
  // Si Analytics no está cargado, el clic funciona igual y no se envía nada.
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('[data-track]') : null;
    if (!a) return;
    try {
      if (typeof window.gtag === 'function') window.gtag('event', 'contact_click', { link_id: a.getAttribute('data-track') });
    } catch (err) {}
  });

  // Botón flotante: se esconde mientras está a la vista el botón de la portada, el del contacto o el pie,
  // para no duplicarlos ni taparlos.
  var flotante = document.querySelector('.float');
  if (flotante && 'IntersectionObserver' in window) {
    flotante.classList.add('is-hidden');
    var visibles = [];
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        var i = visibles.indexOf(en.target);
        if (en.isIntersecting && i < 0) visibles.push(en.target);
        if (!en.isIntersecting && i >= 0) visibles.splice(i, 1);
      });
      flotante.classList.toggle('is-hidden', visibles.length > 0);
    });
    Array.prototype.forEach.call(document.querySelectorAll('.hero .btn, #contacto .row, footer'), function (el) { io.observe(el); });
  }
})();

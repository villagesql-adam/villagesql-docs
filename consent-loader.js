// Loads the villagesql.com consent banner, which also loads GA4 and Mixpanel
// after consent. The banner code lives in villagesql-website so the blog and
// the docs share one copy.
(function () {
  var src = 'https://villagesql.com/js/consent-standalone.js';

  // Mintlify also runs this file on its own hosts and on preview builds, and
  // those visits must not reach the production analytics projects.
  if (window.location.hostname !== 'villagesql.com') return;

  // The website's Cloudflare worker may already have added the same script.
  if (document.querySelector('script[src="' + src + '"]')) return;

  var script = document.createElement('script');
  script.src = src;
  script.defer = true;
  document.head.appendChild(script);
})();

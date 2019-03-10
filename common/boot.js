
(function() { 
  var appName = location.pathname.match(/\/([-\w]+)(\.html)?$/);
  appName = appName ? appName[1].replace('-', '/') : 'index';

  var script = document.createElement('script');
  script.src = appName + '/compressed.js';
  script.type = 'text/javascript';
  document.head.appendChild(script);
})();

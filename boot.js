
(function() {
  var appName = location.pathname.match(/\/([-\w]+)(\.html)?$/);
  appName = appName ? appName[1].replace('-', '/') : 'index';

  
  var lang = 'en';
  window['BlocklyGamesLanguages'] = [lang];
  window['BlocklyGamesLang'] = lang;

  var win= document.querySelector('.Game');

  var script = document.createElement('script');
  script.src = 'dependencies.js';
  script.type = 'text/javascript';
  document.head.appendChild(script);

  var script = document.createElement('script');
  script.src = 'compressed.js';
  script.type = 'text/javascript';
  document.head.appendChild(script);
})();

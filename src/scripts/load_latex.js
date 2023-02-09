/* 

Partially stolen from https://docs.mathjax.org/en/latest/web/configuration.html

*/

function loadScript(url, callback) {
  var script = document.createElement('script');
  script.src = chrome.runtime.getURL(url);
  script.async = true;

  script.addEventListener('load', callback);
  document.head.appendChild(script);
}

(function () {
  loadScript("scripts/config_mathjax.js", function () {
    loadScript("library/mathjax.js", function () {
      loadScript("scripts/page_script.js", function () {});
    });
  });
})();

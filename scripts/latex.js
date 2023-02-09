/* 

Partially stolen from https://docs.mathjax.org/en/latest/web/configuration.html

*/

window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  },
  svg: {
    fontCache: 'global'
  }
};

(function () {
  var script = document.createElement('script');
  script.src = chrome.runtime.getURL('library/tex-svg.js');
  script.async = true;
  document.head.appendChild(script);
})();

document.addEventListener('onkeydown', function(e) {
  if (e.key == "Enter") {
    MathJax.typeset();
  }
})
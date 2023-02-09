console.log("[ChatGPT-Latex] Configuring MathJax");

window.MathJax = {
    tex: {
      inlineMath: [['$$', '$$'], ['\\begin{equation}', '\\end{equation'], ['$', '$'], ['\\(', '\\)']]
    },
    svg: {
      fontCache: 'global'
    }
};
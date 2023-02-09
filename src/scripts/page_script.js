console.log("[ChatGPT-Latex] Page script injected");

window.setInterval(function () {
    // The dumb way
    MathJax.typeset();
}, 1000);

document.addEventListener('mousedown', function () {MathJax.typeset();});
document.addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
        MathJax.typeset();
    }
});
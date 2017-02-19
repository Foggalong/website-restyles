/* This isn't a normal userscript, but custom JS code from Rambox */

/* Allows for CSS editing */
function addCSS(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

/* Expand columns to fit width */
addCSS('.column { width:49.5% !important; }');

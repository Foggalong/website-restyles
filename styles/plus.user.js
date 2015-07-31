// ==UserScript==
// @name          Minimal Google+
// @namespace     http://userstyles.org
// @description	  Makes Google+ a bit cleaner
// @author        Foggalong
// @homepage      http://fogg.me.uk
// @include       https://plus.google.com/*
// @run-at        document-start
// @grant         none
// ==/UserScript==

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

/* Removes annoying posts */
addCSS('.nja { display:none !important; }')

/* Less Buttons */
addCSS('.gb_Qc.gb_r.gb_5c.gb_Xc { display:none !important; }')
addCSS('#gbwa { display:none !important; }')
addCSS('.PQQENc.IYWXcc.uoGTZe { display:none !important; }')
addCSS('.qxxOMd.Ouvvj { display:none !important; }')

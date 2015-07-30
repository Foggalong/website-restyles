// ==UserScript==
// @name          Minimal Gmail
// @namespace     http://userstyles.org
// @description	  Makes Gmail a bit cleaner
// @author        Foggalong
// @homepage      http://fogg.me.uk
// @include       https://mail.google.com/*
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


/* Less Buttons */
addCSS('.gb_3 { display:none !important; }')
addCSS('.gb_ga.gb_Ta.gb_r.gb_ma { display:none !important; }')
addCSS('.aBS.J-J5-Ji { display:none !important; }')
addCSS('.aki.pp { display:none !important; }')

addCSS('.ajl.aib.aZ6 { margin-top:20px !important; }')

/* Removed Footer */
addCSS('.aeG { display:none !important; }')

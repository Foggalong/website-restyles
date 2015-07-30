// ==UserScript==
// @name          Minimal Reddit
// @namespace     http://userstyles.org
// @description	  Makes Reddit a bit cleaner
// @author        Foggalong
// @homepage      http://fogg.me.uk
// @include       *.reddit.com/*
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

/* Removed beta symbol */
addCSS('.beta-link { display:none !important; }')

/* Removes the footer */
addCSS('.footer-parent { display:none !important; }')
addCSS('.debuginfo { display:none !important; }')

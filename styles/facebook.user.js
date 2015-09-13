// ==UserScript==
// @name          Minimal Facebook
// @namespace     http://userstyles.org
// @description	  Makes Facebook a bit cleaner
// @author        Foggalong
// @homepage      http://fogg.me.uk
// @include       https://www.facebook.com/*
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

/* Removes part of interface */
addCSS('.html.element { display:none !important; }');

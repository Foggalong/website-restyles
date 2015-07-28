// ==UserScript==
// @name          Minimal Messenger
// @namespace     http://userstyles.org
// @description	  Makes Facebook Messenger a bit cleaner
// @author        Foggalong
// @homepage      http://fogg.me.uk
// @include       https://www.messenger.com/*
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

/* Removes 'Install App' sign */
addCSS('._s15 { display:none !important; }');

/* Removes annoying chat info pane */
addCSS('._4_j5 { display:none !important; }');
addCSS('ul._fl2 { display:none !important; }');

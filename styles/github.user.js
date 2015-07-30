// ==UserScript==
// @name          Minimal GitHub
// @namespace     http://userstyles.org
// @description	  Makes GitHub a bit cleaner
// @author        Foggalong
// @homepage      http://fogg.me.uk
// @include       https://github.com/*
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

/* Clean navbar */
addCSS('.header-nav.left { display:none !important; }')

/* Clean up sidebar */
addCSS('.github-jobs-promotion { display:none !important; }')
addCSS('.your_repos { display:none !important; }')

/* Removes footer */
addCSS('.site-footer { display:none !important; }')

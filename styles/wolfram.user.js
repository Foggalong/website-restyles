// ==UserScript==
// @name          Minimal Wolfram Alpha
// @namespace     http://userstyles.org
// @description	  Makes Wolfram Alpha a bit cleaner
// @author        Foggalong
// @homepage      http://fogg.me.uk
// @include       https://www.wolframalpha.com/input/*
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

/* Header Bar */
addCSS('.li.a.ng-binding { display:none !important; }');

/* Logo */
addCSS('.h1#logo { display:none !important; }');

/* Input */
addCSS('.span.other-inputs.input-bottom-buttons { display:none !important; }');

/* Output */
addCSS('.aside#relatedQueries { display:none !important; }');

/* Side Bar */
addCSS('.div#right-sidebar { display:none !important; }');

/* Footer */
addCSS('.wa-page-footer { display:none !important; }');

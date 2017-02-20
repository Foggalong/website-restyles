// ==UserScript==
// @name          Tweetdeck Restyle
// @namespace     http://userstyles.org
// @description	  Makes Twitter a bit cleaner
// @author        Foggalong
// @homepage      http://fogg.me.uk
// @include       http://tweetdeck.twitter.com/*
// @include       https://tweetdeck.twitter.com/*
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

/* Expand columns to fit width */
addCSS('.column { width:49.5% !important; }');

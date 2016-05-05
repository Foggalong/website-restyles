// ==UserScript==
// @name          Minimal $SITENAME
// @namespace     http://userstyles.org
// @description	  Makes $SITENAME a bit cleaner
// @author        Foggalong
// @homepage      http://fogg.me.uk
// @include       https://www.3r.org.uk/*
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
addCSS('.navbar-brand { display:none !important; }');

/* Defaults to rolling week view */
document.body.addEventListener('click', function(e){
    var targ = e.target || e.srcElement;
    if ( targ && targ.href && targ.href.match('https?:\/\/www.3r.org.uk\/rota') ) {
        targ.href = targ.href.replace('://www.3r.org.uk\/rota', '://www.3r.org.uk/rota/for/2016-05-02/rolling%20week');
    }
});

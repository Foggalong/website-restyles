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
addCSS('#your_repos { display:none !important; }')
addCSS('.clone-options { display:none !important; }')

/* Remove ProTips */
addCSS('.protip { display:none !important; }')

/* Removes footer */
addCSS('#footer { display:none !important; }')
addCSS('.site-footer { display:none !important; }')

/* Cleanup Profiles */
addCSS('.vcard-stats { display:none !important; }')
addCSS('.boxed-group-action.boxed-group-icon.tooltipped.tooltipped-nw.tooltipped-multiline { display:none !important }')
addCSS('.contrib-footer.clearfix { display:none !important; }')

// ==UserScript==
// @name          Minimal YouTube
// @namespace     http://userstyles.org
// @description	  Makes YouTube a bit cleaner
// @author        Foggalong
// @include       http://www.youtube.com/watch*
// @include       https://www.youtube.com/watch*
// @include       http://youtube.com/watch*
// @include       https://youtube.com/watch*
// @include       http://www.youtube.com/*
// @include       https://www.youtube.com/*
// @include       http://youtube.com/*
// @include       https://youtube.com/*
// @run-at        document-end
// @grant	  none
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

/* Remove sidebar */
addCSS('#appbar-guide-menu { display:none !important; }')
addCSS('#appbar-guide-button-container { display:none !important; }')

/* Fewer buttons */
addCSS('#logo-container { display:none !important; }')
addCSS('#upload-btn { display:none !important; }')
addCSS('.notifications-container { display:none !important; }')
addCSS('#yt-masthead-account-picker { display:none !important; }')
addCSS('#masthead-appbar-container { display:none !important; }')

/* Cleanup Video Page */
addCSS('#watch7-subscription-container { display:none !important; }')
addCSS('#watch8-secondary-actions { display:none !important; }')
addCSS('.checkbox-on-off { display:none !important; }')
addCSS('.autoplay-bar { display:none !important; }')
addCSS('.video-list-item.related-list-item.show-video-time.related-list-item-compact-radio { display:none !important; }')
addCSS('.watch-sidebar-separation-line { display:none !important; }')

/* Nuke Footer */
addCSS('#footer-container { display:none !important; }')

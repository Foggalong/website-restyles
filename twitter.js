// ==UserScript==
// @name          Minimal Twitter
// @namespace     http://userstyles.org
// @description	  Makes Twitter a bit cleaner
// @author        Foggalong
// @homepage      http://fogg.me.uk
// @include       http://twitter.com/*
// @include       https://twitter.com/*
// @include       http://*.twitter.com/*
// @include       https://*.twitter.com/*
// @run-at        document-start
// @grant         none
// ==/UserScript==

/* Allows for CSS editing */
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

/* Everywhere */
addGlobalStyle('.topics { display:none !important; }');
addGlobalStyle('.Icon.Icon--bird.bird-topbar-etched { display:none !important; }')
addGlobalStyle('.topbar-tweet-btn { display:none !important; }')
addGlobalStyle('.header-inner { display:none !important; }')
addGlobalStyle('.text { display:none !important; }')
addGlobalStyle('.js-nav-links { display:none !important; }')
addGlobalStyle('.Icon.Icon--search.nav-search { display:none !important; }')
addGlobalStyle('.dropdown-caret { display:none !important; }')

/* Home page */
addGlobalStyle('.dashboard.dashboard-right { display:none !important; }');
addGlobalStyle('.module.trends { display:none !important; }');
addGlobalStyle('.module.roaming-module.wtf-module.js-wtf-module .has-content { display:none !important; }')
addGlobalStyle('.Footer.module.roaming-module { display:none !important; }')
addGlobalStyle('.geo-picker { display:none !important; }')

/* Profile page */
addGlobalStyle('.ProfileWTFAndTrends { display:none !important; }');
addGlobalStyle('.ProfileTweetbox { display:none !important; }')
addGlobalStyle('.ProfileAvatar { height:150px !important; width:150px !important; }')
addGlobalStyle('.ProfileCanopy-header { height:200px !important; }')
addGlobalStyle('.ProfileCanopy--large { height:200px !important; }')
addGlobalStyle('.ProfileNav-item.ProfileNav-item--userActions.u-pullRight.u-textRight.with-rightCaret { display:none !important; }')
addGlobalStyle('.PhotoRail-mediaBox { display:none !important }')

/* Tweets */
addGlobalStyle('.details.with-icn.js-details { display:none !important; }')
addGlobalStyle('.action-reply-container { display:none !important; }')
addGlobalStyle('.with-icn.retweet.js-tooltip b { display:none !important; }')
addGlobalStyle('.with-icn.undo-retweet.js-tooltip b { display:none !important; }')
addGlobalStyle('.with-icn.favorite.js-tooltip b { display:none !important; }')
addGlobalStyle('.with-icn.unfavorite.js-tooltip b { display:none !important; }')
addGlobalStyle('.translate-label { display:none !important; }')
addGlobalStyle('.with-icn.js-action-del.js-tooltip b { display:none !important; }')
addGlobalStyle('.with-icn.dropdown-toggle.js-tooltip b { display:none !important; }')
addGlobalStyle('.metadata { display:none !important; }')
addGlobalStyle('.translation-attribution { display:none !important; }')
// addGlobalStyle('.btn-link.js-translate-tweet.translate-button { display:none !important; }')
addGlobalStyle('.CardAttribution { display:none !important; }')
addGlobalStyle('.media-preview-container { display:none !important; }')

/* Popups */
addGlobalStyle('.twttr-dialog-footer { display:none !important; }')
addGlobalStyle('.go-to-profile { display:none !important; }')
addGlobalStyle('.modal-title { display:none !important; }')
addGlobalStyle('.profile-header-inner.flex-module.clearfix { height:80px !important}')

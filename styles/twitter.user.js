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
function addCSS(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

/* Everywhere */
addCSS('.topics { display:none !important; }');
addCSS('.Icon.Icon--bird.bird-topbar-etched { display:none !important; }')
addCSS('.topbar-tweet-btn { display:none !important; }')
addCSS('.header-inner { display:none !important; }')
addCSS('.text { display:none !important; }')
addCSS('.js-nav-links { display:none !important; }')
addCSS('.Icon.Icon--search.nav-search { display:none !important; }')
addCSS('.dropdown-caret { display:none !important; }')
addCSS('.modal-btn.modal-close.js-close { display:none !important }')
addCSS('.moments.js-moments-tab { display:none !important }')

/* Home page */
addCSS('.dashboard.dashboard-right { display:none !important; }');
addCSS('.module.trends { display:none !important; }');
addCSS('.module.roaming-module.wtf-module.js-wtf-module .has-content { display:none !important; }')
addCSS('.module.roaming-module.wtf-module.js-wtf-module.has-content { display:none !important; }')
addCSS('.Footer.module.roaming-module { display:none !important; }')
addCSS('.geo-picker { display:none !important; }')

/* Profile page */
addCSS('.ProfileWTFAndTrends { display:none !important; }');
addCSS('.ProfileTweetbox { display:none !important; }')
addCSS('.ProfileAvatar { height:150px !important; width:150px !important; }')
addCSS('.ProfileCanopy-header { height:200px !important; }')
addCSS('.ProfileCanopy--large { height:200px !important; }')
addCSS('.ProfileNav-item.ProfileNav-item--userActions.u-pullRight.u-textRight.with-rightCaret { display:none !important; }')
addCSS('.PhotoRail-mediaBox { display:none !important }')

/* Tweets */
addCSS('.details.with-icn.js-details { display:none !important; }')
addCSS('.action-reply-container { display:none !important; }')
addCSS('.with-icn.retweet.js-tooltip b { display:none !important; }')
addCSS('.with-icn.undo-retweet.js-tooltip b { display:none !important; }')
addCSS('.with-icn.favorite.js-tooltip b { display:none !important; }')
addCSS('.with-icn.unfavorite.js-tooltip b { display:none !important; }')
addCSS('.translate-label { display:none !important; }')
addCSS('.with-icn.js-action-del.js-tooltip b { display:none !important; }')
addCSS('.btn-link.with-icn.dropdown-toggle.js-dropdown-toggle.js-tooltip b { display:none !important; }')
addCSS('.metadata { display:none !important; }')
addCSS('.translation-attribution { display:none !important; }')
addCSS('.CardAttribution { display:none !important; }')
addCSS('.media-preview-container { display:none !important; }')
addCSS('.twitter-hashflag { display:none !important; }')

/* Feed */
addCSS('.WtfLargeCarouselStreamItem.js-stream-item.stream-item.js-dedupe-wtf-sidebar { display:none !important; }')
addCSS('.PromptbirdPrompt-streamItem.js-stream-item.js-prompt-layout-container { display:none !important; }')

/* Popups */
addCSS('.twttr-dialog-footer { display:none !important; }')
addCSS('.go-to-profile { display:none !important; }')
addCSS('.modal-title { display:none !important; }')
addCSS('.profile-header-inner.flex-module.clearfix { height:80px !important}')

/* Lists page */
addCSS('.ListCreationModule-title { display:none !important; }')
addCSS('.ListCreationModule-description { display:none !important; }')

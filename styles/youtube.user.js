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


// styles to inject as a multiline Javascript string
var styles = `
	/* Remove sidebar */
	#appbar-guide-menu { display:none !important; }
	#appbar-guide-button-container { display:none !important; }

	/* Fewer buttons */
	#logo-container { display:none !important; }
	#upload-btn { display:none !important; }
	.notifications-container { display:none !important; }
	#yt-masthead-account-picker { display:none !important; }
	#masthead-appbar-container { display:none !important; }

	/* Cleanup Video Page */
	#watch7-subscription-container { display:none !important; }
	#watch8-secondary-actions { display:none !important; }
	.checkbox-on-off { display:none !important; }
	.autoplay-bar { display:none !important; }
	.video-list-item.related-list-item.show-video-time.related-list-item-compact-radio { display:none !important; }
	.watch-sidebar-separation-line { display:none !important; }

	/* Nuke Footer */
	#footer-container { display:none !important; }
`


var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

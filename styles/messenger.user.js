// ==UserScript==
// @name          Minimal Messenger
// @namespace     http://userstyles.org
// @description	  Makes Messenger a bit cleaner
// @author        Foggalong
// @include       https://www.messenger.com/*
// @run-at        document-start
// @grant         none
// ==/UserScript==


// styles to inject as a multiline Javascript string
var styles = `
  /* Removes 'Install App' sign */
  ._s15 { display:none !important; }

  /* Removes annoying chat info pane */
  ._4_j5 { display:none !important; }
  ul._fl2 { display:none !important; }
`


// code for injecting `styles` into the stylesheet
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

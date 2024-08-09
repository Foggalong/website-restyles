// ==UserScript==
// @name          Minimal $SITENAME
// @namespace     http://userstyles.org
// @description	  Makes $SITENAME a bit cleaner
// @author        Foggalong
// @homepage      http://fogg.uk
// @include       https://www.$WEBSITE-URL.com/*
// @run-at        document-start
// @grant         none
// ==/UserScript==


// styles to inject as a multiline JavaScript string
var styles = `
  .html.element { display:none !important; }
`


// code for injecting `styles` into the stylesheet
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

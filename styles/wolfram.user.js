// ==UserScript==
// @name          Minimal Wolfram Alpha
// @namespace     http://userstyles.org
// @description	  Makes Wolfram Alpha a bit cleaner
// @author        Foggalong
// @include       https://www.wolframalpha.com/input/*
// @run-at        document-start
// @grant         none
// ==/UserScript==

// styles to inject as a multiline Javascript string
var styles = `
  /* Header Bar */
  .li.a.ng-binding { display:none !important; }

  /* Logo */
  .h1#logo { display:none !important; }

  /* Input */
  .span.other-inputs.input-bottom-buttons { display:none !important; }

  /* Output */
  .aside#relatedQueries { display:none !important; }

  /* Side Bar */
  .div#right-sidebar { display:none !important; }

  /* Footer */
  .wa-page-footer { display:none !important; }
`


var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

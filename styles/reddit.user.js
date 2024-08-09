// ==UserScript==
// @name          Minimal Reddit
// @namespace     http://userstyles.org
// @description	  Makes Reddit a bit cleaner
// @author        Foggalong
// @include       *.reddit.com/*
// @run-at        document-start
// @grant         none
// ==/UserScript==


// styles to inject as a multiline Javascript string
var styles = `
  /* Top Bar Crap */
  .dropdown.srdrop {display:none !important; }

  /* Removed beta symbol */
  .beta-link { display:none !important; }

  /* Sidebar */
  .sidebox.create { display:none !important; }

  /* Comments */
  .link-save-button.save-button { display:none !important; }
  .comment-save-button.save-button { display:none !important; }
  .state-button.hide-button { display:none !important; }

  /* Removes the footer */
  .footer-parent { display:none !important; }
  .debuginfo { display:none !important; }
`


var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

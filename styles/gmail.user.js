// ==UserScript==
// @name          Minimal Gmail
// @namespace     http://userstyles.org
// @description	  Makes Gmail a bit cleaner
// @author        Foggalong
// @include       https://mail.google.com/*
// @run-at        document-start
// @grant         none
// ==/UserScript==


// styles to inject as a multiline Javascript string
var styles = `
  /* Fewer Buttons */
  .gb_3 { display:none !important; }
  .gb_ga.gb_Ta.gb_r.gb_ma { display:none !important; }
  .aBS.J-J5-Ji { display:none !important; }
  .aBS { display:none !import; }
  .aki.pp { display:none !important; }
  .gb_rb.gb_Ta.gb_r { display:none !important; }
  .gb_Qc.gb_r.gb_5c.gb_Xc { display:none !important; }

  /* Fixed Sidebar */
  .ajl.aib.aZ6 { margin-top:20px !important; }

  /* Removed Footer */
  .l2.ov { display:none !important; }
  .aeG { display:none !important; }
`


// code for injecting `styles` into the stylesheet
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

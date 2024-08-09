// ==UserScript==
// @name          Minimal GitHub
// @namespace     http://userstyles.org
// @description	  Makes GitHub a bit cleaner
// @author        Foggalong
// @include       https://github.com/*
// @run-at        document-start
// @grant         none
// ==/UserScript==


// styles to inject as a multiline JavaScript string
var styles = `
  /* Clean navbar */
  .header-nav.left { display:none !important; }
  .dropdown-divider { display:none !important; }
  .dropdown-header.header-nav-current-user.css-truncate { display:none !important; }
  .dropdown-caret { display:none !important; }

  /* Clean up topbar */
  .js-toggler-container.js-social-container.starring-container { display:none !important; }

  /* Clean up sidebar */
  .github-jobs-promotion { display:none !important; }
  #your_repos { display:none !important; }
  .clone-options { display:none !important; }
  .btn.btn-sm.sidebar-button { margin-top:10px !important; }

  /* Remove ProTips */
  .protip { display:none !important; }
  
  /* Removes footer */
  #footer { display:none !important; }
  .site-footer { display:none !important; }
  
  /* Cleanup Profiles */
  .vcard-stats { display:none !important; }
  .boxed-group-action.boxed-group-icon.tooltipped.tooltipped-nw.tooltipped-multiline { display:none !important }
  .contrib-footer.clearfix { display:none !important; }
`


// code for injecting `styles` into the stylesheet
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

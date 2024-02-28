// ==UserScript==
// @name          Minimal 3r
// @namespace     http://userstyles.org
// @description	  Makes 3r a bit cleaner
// @author        Foggalong
// @include       https://www.3r.org.uk/*
// @run-at        document-start
// @grant         none
// ==/UserScript==


// styles to inject as a multiline Javascript string
var styles = `
	/* NAVIGATION BAR */

	/* remove the logo from the navbar */
 	div.navbar-header {
		display:none !important;
   }

  /* remove text labels from category tabs */
 	ul.nav > li {
  	text-indent: -9999px; width: 45px;
  }
  
  /* remove useless menu buttons */
  #contextual_help_link, #simplify_interface, #general-search-text, #logout {
  	display: none !important;
  }


  /* ROTA FRAME */
  /* remove buttons for selecting different rotas */
  #rotas_shown_container, #rota_key {
  	display:none !important;
  }
  
  /* remove button to add new shifts */
  div.day_icons {
  	display:none !important;
  }
  
  /* remove holidays and birthdays */
  tr.week_view_events {
  	display:none !important;
  }


  /* WEBSITE FOOTER */
  footer {
  	display:none !important;
  }
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

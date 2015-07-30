// ==UserScript==
// @name          Minimal YouTube
// @namespace     http://userstyles.org
// @description	  Makes YouTube a bit cleaner
// @author        Foggalong
// @homepage      http://fogg.me.uk
// @include       http://www.youtube.com/*
// @include       https://www.youtube.com/*
// @include       http://youtube.com/*
// @include       https://youtube.com/*
// @run-at        document-start
// @grant         none
// ==/UserScript==


/*
    This script also contains a user script by Lewis Aron Milne which
    was released into the public domain. Their script makes the YouTube
    comments togglable so that I don't have to see their crapness. The
    script can be found at https://greasyfork.org/users/7439
*/


/* Make the comments togglable */
(function () {{
    var comments = document.getElementById("watch-discussion");
    var toggleLoc = document.getElementById("watch8-secondary-actions
    var toggleDiv = document.createElement("div");

    toggleDiv.style.textAlign = "center";
    toggleDiv.innerHTML = "<button id='toggleBtn' class='yt-uix-button-default'> Show Comments </button>";
    
    comments.parentNode.insertBefore(toggleDiv, comments);
    comments.style.display = "none";
    
    var toggleBtn = document.getElementById("toggleBtn");
    toggleBtn.onclick = function() {
        if (comments.style.display !== "none") {
            comments.style.display = "none";
            toggleBtn.innerHTML = "Show  Comments";
        }
        else {
            comments.style.display = "";
            toggleBtn.innerHTML = "Hide Comments";
        }
    }
}) ();
                                      

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

/* Remove sidebar */
addCSS('#appbar-guide-menu { display:none !important; }')
addCSS('#appbar-guide-button-container { display:none !important; }')

/* Fewer buttons */
addCSS('#logo-container { display:none !important; }')
addCSS('#upload-btn { display:none !important; }')
addCSS('.notifications-container { display:none !important; }')
addCSS('#yt-masthead-account-picker { display:none !important; }')
addCSS('#masthead-appbar-container { display:none !important; }')

/* Cleanup Video Page */
addCSS('#watch7-subscription-container { display:none !important; }')
addCSS('#watch8-secondary-actions { display:none !important; }')
addCSS('.checkbox-on-off { display:none !important; }')

/* Nuke Footer */
addCSS('#footer-container { display:none !important; }')

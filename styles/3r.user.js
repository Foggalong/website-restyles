// ==UserScript==
// @name          Minimal 3r
// @namespace     http://userstyles.org
// @description	  Makes 3r a bit cleaner
// @author        Foggalong
// @homepage      http://fogg.me.uk
// @include       https://www.3r.org.uk/*
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

/* Cleans up navbar */
addCSS('div.navbar-header { display:none !important; }');
addCSS('ul.nav > li { text-indent: -9999px; width: 45px; }');
addCSS('div.toplogin_row { text-indent: -9999px; width: 50px; }');

/* Timetable Frame */
addCSS('span.visible-md-inline:nth-child(2) { display:none !important; }');
addCSS('span.visible-md-inline:nth-child(4) { display:none !important; }');
addCSS('div#rota_key { border:none !important; }');
addCSS('span.ui-button-text:nth-child(1) { display:none !important; }');
addCSS('#rotas_shown { display:none !important; }')
addCSS('#rota_key > b:nth-child(1) { display:none !important; }');
addCSS('tr.week_view_events { display:none !important; }');
addCSS('div.day_icons { display:none !important; }');

/* Move shift labels to sidebar */
addCSS('div.rota_item_time_name { display:none !important; }');
addCSS('tr.week_view_rota_shift_period:nth-child(2) > th:nth-child(1):before { content: "IM"; }');
addCSS('tr.week_view_rota_shift_period:nth-child(3) > th:nth-child(1):before { content: "Phone"; }');
addCSS('tr.week_view_rota_shift_period:nth-child(4) > th:nth-child(1):before { content: "Supo"; }');
addCSS('tr.week_view_rota_shift_period:nth-child(5) > th:nth-child(1):before { content: "Callout"; }');
addCSS('tr.week_view_rota_shift_period:nth-child(6) > th:nth-child(1):before { content: "Mail"; }');


/* Kill footer */
addCSS('footer { display:none !important; }');

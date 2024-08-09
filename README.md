# Website Restyles

Userscripts for restyling websites to my own liking, intended as a simpler alternative to [Stylus](https://github.com/openstyles/stylus).

## Installation

1. Install a userscript manager browser add-on
    1. For Firefox get [GreaseMonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
    2. For Chrome get [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
2. Go into the [styles](styles/) folder and click on the script you want
3. Click the RAW button at the top right of the code
4. Follow the instructions in the pop-up, and you're done \O/

## Template

The [included template](template.user.js) can be used to create new restyles. Replace `$SITENAME` with the website's name (e.g. `GitHub`), and

```javascript
// @include       https://www.$WEBSITE-URL.com/*
```

with the website base URL. For example,

```javascript
// @include       https://github.com/*
```

If you're not me, you'll also want to update `@author` and `@homepage`. Then simply replace the content of the `styles` multi-line string with whatever CSS you wish to inject.

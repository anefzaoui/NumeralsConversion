# Numerals Conversion Logic

This logic is mainly intended to be used in Firefox OS where we had to come up with a way to have the system show Eastern Arabic Numerals.
<br/>
It uses the same l10n style for defining elements that need to be converted (localized, in the case of l10n).
The script does not handle HTML elements, which is why numerals themselves have to be wrapped with an HTML element (span, div, p; up to you, really) since it uses `.textContent` to get the numerals and parse them.
<br/>
To use it, simply add `data-intl-numerals` to your HTML element, and make sure to initialize the script by adding `NumeralsHelper.init()`.
<br/>
## Files in this project
- **index.html**: the index file with the text samples containing numerals.
- **js/l10n.js**: a polyfill for l10n's `localized` event.
- **js/main.js**: file that initializes the logic.
- **js/numerals.js**: contains the logic of converting.

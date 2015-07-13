# Numerals Conversion Logic

This logic is intended to be used in Firefox OS and eventually gets integrated into l10n.js or l20n.js.
<br/>
It uses the same l10n style for defining elements that need to be conversed (localized, in the case of l10n).
The script does not handle html elements, which is why numerals have to be wrapped with a html element since it uses `.textContent` to get the numerals and parse them.
<br/>
To use it, simply add `data-intl-numerals` to your HTML element, and make sure to initialize the script by adding `NumeralsHelper.init()`.
<br/>
## Files in this project
- **index.html**: the index file with the text that has numerals to convert.
- **js/l10n.js**: a polyfill for l10n for this project.
- **js/main.js**: file that initializes the logic.
- **js/numerals.js**: file that contains the logic of converting numerals.

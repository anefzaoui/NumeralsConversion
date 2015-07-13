"use strict";

(function(exports) {
  var numerals = {
    // to Eastern Arabic numerals
    toEA: function() {
      var allHTMLElements = [].slice.call(document.querySelectorAll('[data-l10n-numerals]'));
      allHTMLElements.forEach(function(el) {
        var matches = el.textContent.match(/\d+/g);
        if (matches != null) {
          var text = el.textContent;
          var res = text;
          for (var i = 0; i < matches.length; i++) {
            res = res.replace(matches[i], new Intl.NumberFormat('ar-EG').format(matches[i]));
          }
          el.textContent = res;
        }
      });
    },

    toWA: function() {
      var allHTMLElements = [].slice.call(document.querySelectorAll('[data-l10n-numerals]'));
      allHTMLElements.forEach(function(el) {
        var matches = el.textContent.match(/([٠-٩])/g);
        if (matches != null) {
          var text = el.textContent;
          var res = text;
          for (var i = 0; i < matches.length; i++) {
            res = res.replace(matches[i], new Intl.NumberFormat('ar-EG').format(matches[i]));
          }
          el.textContent = res;
        }
      });
    },

    init: function() {
      /* Adding a event listener for the localized event
       * Then we grab the current language and apply
       * accordingly the needed function.
       * We call this function when we intend to execute
       * the numerals logic in numerals.js.
       */
      var self = this;
      window.addEventListener('localized', function(evt) {
        if (evt.detail.language === 'ar') {
          self.toEA();
        }
      });
    }
  }
  exports.numerals = numerals;
}(window));

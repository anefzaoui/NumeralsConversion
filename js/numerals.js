'use strict';

(function(exports) {
  var NumeralsHelper = {
    _cnvMutations: function() {
      this._applyEAWA();
    },

    _applyEAWA: function() {
      var lang = document.documentElement.lang;
      if (lang === 'ar') {
        this.toEA();
      } else {
        this.toWA();
      }
    },

    _cnvEAWA: function(b) {
      var allHTMLElements = [].slice
        .call(document.querySelectorAll('[data-intl-numerals]'));
      allHTMLElements.forEach(function(el) {
        var matches = el.textContent.match(b ? /\d+/g : /([٠-٩])/g);
        if (matches != null) {
          var text = el.textContent;
          var res = text;
          for (var i = 0; i < matches.length; i++) {
            res = res.replace(matches[i],
              b ? new Intl.NumberFormat('ar-EG').format(matches[i]) :
              matches[i].charCodeAt(0) - 1632);
          }
          el.textContent = res;
        }
      });
    },

    /**
     * From Western to Eastern Arabic numerals
     * e.g. from 123 to ١٢٣.
     */
    toEA: function() {
      this._cnvEAWA(true);
    },

    /**
     * From Eastern to Western Arabic numerals
     * e.g. from ١٢٣ to 123.
     */
    toWA: function() {
      this._cnvEAWA(false);
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
        self._applyEAWA();
      });

      var observer = new MutationObserver(this._cnvMutations.bind(this));
      this.observe = () => observer.observe(document.body, {
        attributes: true,
        characterData: false,
        childList: true,
        subtree: true,
        attributeFilter: ['data-intl-numerals']
      });
      this.disconnect = () => observer.disconnect();
      this.observe();
    }
  };

  exports.NumeralsHelper = NumeralsHelper;
}(window));

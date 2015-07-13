(function(exports) {
  var l10n = {
    fireLocalizedEvent: function() {
      var event = new CustomEvent('localized', {
        'bubbles': false,
        'cancelable': false,
        'detail': {
          'language': document.documentElement.lang
        }
      });
      window.dispatchEvent(event);
    },

    setLang: function(lang) {
      document.documentElement.lang = lang;
      /* Only supporting Arabic as an RTL language
       * Because it's for testing purpose only. */
      if (lang === 'ar') {
        document.documentElement.dir = 'rtl'
      } else {
        document.documentElement.dir = 'ltr'
      }
      this.fireLocalizedEvent();
    }
  }
  exports.l10n = l10n;
}(window));

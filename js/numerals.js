(function(exports) {
  var numerals = {
    // to Eastern Arabic numerals
    toEA: function() {
      var allHTMLElements = [].slice.call(document.querySelectorAll('[data-l10n-numerals]'));
      allHTMLElements.forEach(function(el) {
        var matches = el.textContent.match(/\d+/g);
        if (matches != null) {
          var text = el.innerHTML;
          var res = text;
          thenum = text.match(/\d+/g);
          // XXX: Query only what's between > and <
          if (el.textContent != null) {
            for (var i = 0; i < thenum.length; i++) {
              res = res.replace(thenum[i], new Intl.NumberFormat('ar-EG').format(thenum[i]));
            }
            el.innerHTML = res;
          }

        }

      });
    },

    init: function() {
      /* Adding a event listener for the localized event
       * Then we grab the current language and apply
       * accordingly the needed function.
       * We call this function when we intend to execute
       * the script.
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

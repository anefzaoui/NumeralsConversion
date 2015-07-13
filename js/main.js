document.addEventListener('DOMContentLoaded', function _loadingContent() {
  document.removeEventListener('DOMContentLoaded', _loadingContent);
  l10n.setLang('en-US');
  numerals.init();

  var arabicLanguageButton = document.getElementById('arBtn');
  arabicLanguageButton.addEventListener('click', function() {
    l10n.setLang('ar');
  });

  var englishLanguageButton = document.getElementById('enBtn');
  englishLanguageButton.addEventListener('click', function() {
    l10n.setLang('en-US');
  });
});

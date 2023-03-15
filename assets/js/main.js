document.addEventListener("DOMContentLoaded", function() {
  const languageSwitcher = document.querySelector('.language-switcher');
  const languageSelect = languageSwitcher.querySelector('select');

  languageSelect.addEventListener('change', function() {
    const language = this.value;
    let redirectUrl;

    if (language === 'en') {
      redirectUrl = '/en';
    } else if (language === 'pl') {
      redirectUrl = '/pl';
    }

    window.location.href = redirectUrl;
  });
});
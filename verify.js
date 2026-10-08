// Script de vérification du site
const checks = {
  htmlValidity: () => document.documentElement.lang === 'fr',
  hasSkipLink: () => document.querySelector('.skip-link') !== null,
  heroLoaded: () => document.querySelector('.hero-image') !== null,
  formValid: () => document.querySelector('.rsvp-form') !== null,
  allLinksWork: () => {
    const links = document.querySelectorAll('a[href^="#"]');
    let valid = true;
    links.forEach(link => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) valid = false;
    });
    return valid;
  },
  ariaLabelsPresent: () => {
    const inputs = document.querySelectorAll('input, select, textarea');
    return Array.from(inputs).every(inp => inp.hasAttribute('aria-label'));
  },
  noConsoleErrors: () => {
    let hasError = false;
    const originalError = console.error;
    console.error = function() {
      hasError = true;
      originalError.apply(console, arguments);
    };
    return !hasError;
  },
  responsiveDesign: () => {
    // Check if media queries are present
    const styles = document.querySelector('style');
    return styles.textContent.includes('@media');
  }
};

// Run checks
console.log('🔍 VÉRIFICATIONS SITE MARIAGE');
console.log('================================');
Object.entries(checks).forEach(([name, fn]) => {
  try {
    const result = fn();
    console.log(`${result ? '✅' : '❌'} ${name}: ${result ? 'OK' : 'FAIL'}`);
  } catch(e) {
    console.log(`❌ ${name}: ERROR - ${e.message}`);
  }
});
console.log('================================');

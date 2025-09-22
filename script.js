document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.main-nav ul');

  if (!hamburger || !navList) return; 

  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.toggle('is-open');
    navList.classList.toggle('active');
    this.setAttribute('aria-expanded', this.classList.contains('is-open'));
  });

  document.addEventListener('click', function (e) {
    if (
      navList.classList.contains('active') &&
      !e.target.closest('.main-nav') &&
      !e.target.closest('.hamburger')
    ) {
      navList.classList.remove('active');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  navList.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      navList.classList.remove('active');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});
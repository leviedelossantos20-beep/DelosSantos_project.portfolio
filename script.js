document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.main-nav ul');

  if (!hamburger || !navList) return; 

  hamburger.addEventListener('click', function () {
    const isOpen = this.classList.toggle('is-open');
    navList.classList.toggle('active');
    this.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', function (e) {
    const target = e.target;
    const clickedInsideNav = target.closest('.main-nav') || target.closest('.hamburger');

    if (!clickedInsideNav && navList.classList.contains('active')) {
      navList.classList.remove('active');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});
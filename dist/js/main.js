"use strict";

document.addEventListener('DOMContentLoaded', function () {
  function initMenu() {
    var menuBtn = document.querySelector('.menu-btn');
    var menuWrapper = document.querySelector('.header__main');
    menuBtn.addEventListener('click', function () {
      menuWrapper.classList.toggle('active');
      menuBtn.classList.toggle('active');
    });
  }

  initMenu();
});
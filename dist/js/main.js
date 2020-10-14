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

  function initMainSlider() {
    var mainSlider = new Swiper('.main-slider__content', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function renderFraction(currentClass, totalClass, index, total) {
          return '<span class="' + currentClass + '">0 ' + index + ' </span>' + '/' + '<span class="' + totalClass + '">0 ' + total + ' </span>';
        },
        formatFractionCurrent: function formatFractionCurrent(number) {
          if (number < 10) {
            number = '0' + number;
          }

          return number;
        },
        formatFractionTotal: function formatFractionTotal(number) {
          if (number < 10) {
            number = '0' + number;
          }

          return number;
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }

  function initScrollBar() {
    var el = document.querySelector('.benefits__info');
    SimpleScrollbar.initEl(el);
  }

  initScrollBar();
  initMenu();
  initMainSlider();
});
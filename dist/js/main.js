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

  function initTabs() {
    var tabButtons = document.querySelector('.services-page__items');
    var tabButton = document.querySelectorAll('.services-page__item');
    var tabContent = document.querySelectorAll('.services-page__content-item');

    if (tabButtons) {
      tabButtons.addEventListener('click', function (event) {
        if (event.target.classList.contains('services-page__item')) {
          tabContent.forEach(function (item) {
            item.classList.remove('active');

            if (item.dataset.tab === event.target.dataset.tab) {
              item.classList.add('active');
            }
          });
          tabButton.forEach(function (item) {
            item.classList.remove('active');

            if (item.dataset.tab === event.target.dataset.tab) {
              item.classList.add('active');
            }
          });
        }
      });
    }
  }

  initTabs();
  initMenu();
  initMainSlider();
});
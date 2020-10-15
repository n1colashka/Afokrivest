document.addEventListener('DOMContentLoaded', function() {

    function initMenu() {
        const menuBtn = document.querySelector('.menu-btn');
        const menuWrapper = document.querySelector('.header__main');

        menuBtn.addEventListener('click', () => {
            menuWrapper.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
    }

    function initMainSlider() {
        var mainSlider = new Swiper('.main-slider__content', {
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
                    renderFraction: function (currentClass, totalClass, index, total) {
                        return '<span class="' + currentClass + '">0 ' + index + ' </span>' +
                            '/' +
                            '<span class="' + totalClass + '">0 ' + total + ' </span>';
                    },
                    formatFractionCurrent: function (number) {
                        if (number < 10) {
                            number = '0' + number;
                        }
                        return number;
                    },
                    formatFractionTotal: function (number) {
                        if (number < 10) {
                            number = '0' + number;
                        }
                        return number;
                    },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    function initTabs() {
        const tabButtons = document.querySelector('.services-page__items');
        const tabButton = document.querySelectorAll('.services-page__item');
        const tabContent= document.querySelectorAll('.services-page__content-item');
        if (tabButtons) {
            tabButtons.addEventListener('click', event => {
                if (event.target.classList.contains('services-page__item')) {
                    tabContent.forEach(item => {
                        item.classList.remove('active');

                        if (item.dataset.tab === event.target.dataset.tab) {
                            item.classList.add('active');
                        }
                    });
                    tabButton.forEach(item => {
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
document.addEventListener('DOMContentLoaded', function() {

    function initMenu() {
        const menuBtn = document.querySelector('.menu-btn');
        const menuWrapper = document.querySelector('.header__main');

        menuBtn.addEventListener('click', () => {
            menuWrapper.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
    }

    initMenu();
});
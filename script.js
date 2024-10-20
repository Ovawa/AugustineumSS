const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
const currentLocation = window.location.href;
const menuItems = document.querySelectorAll('.side-menu a');

menuItems.forEach(item => {
    if (item.href === currentLocation) {
        item.classList.add('active-link');
    }
});

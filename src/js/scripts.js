import { tns } from './../../node_modules/tiny-slider/src/tiny-slider';

const slider = tns({
    container: '.my-slider',
    items: 1.3,
    slideBy: 'page',
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    loop: false,
    controlsText: ['', ''],
    nav: true,
    navPosition: 'bottom',
    controls: false,
    center: true,
    responsive: {
        1200: {            
            items: 4
        },
        768: {
            items: 3,
            controls: true,
            center: false,
            nav: false
        },
        575: {            
            items: 2            
        }
    }
});

const menuMobile = document.querySelector('.menu-mobile');

function toggleMenu() {
    menuMobile.classList.toggle('active');
    document.body.classList.toggle('hidden');
    document.querySelector('.overlay').classList.toggle('active');
    document.querySelector('.logo-header').classList.toggle('hidden');
};

function closeMenu(e) {
    if (e.target !== menuMobile) {
        menuMobile.classList.remove('active');
        document.body.classList.remove('hidden');
        document.querySelector('.overlay').classList.remove('active');
        document.querySelector('.logo-header').classList.remove('hidden');
    }
}

function handleButtonClick(e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({block: "center", behavior: "smooth"});
}

function underlineItem(e) {
    document.querySelectorAll('.menu-item.active').forEach((item) => item.classList.remove('active'));
    const isItem = e.target.closest('.menu-item');
    if (isItem) {        
        isItem.classList.add('active');
    }
}
document.querySelector('.mobile-btn').addEventListener('click', toggleMenu);
document.querySelector('.overlay').addEventListener('click', closeMenu);
document.querySelector('.scroll-to').addEventListener('click', handleButtonClick);
document.querySelectorAll('.menu-items').forEach((el) => el.addEventListener('click', underlineItem));
import { tns } from './../../node_modules/tiny-slider/src/tiny-slider';

const slider = tns({
    container: '.my-slider',
    items: 3,
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    loop: false,
    controlsText: ['', ''],
    nav: false
});
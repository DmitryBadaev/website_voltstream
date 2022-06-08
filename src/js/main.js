import burger from './modules/burger';
import accordion from './modules/accordion';
import popup from './modules/popup';
import map from './modules/map';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    burger();
    accordion();
    popup('.header__button', '.popup__consultation');
    popup('.menu-block__descr', '.popup__consultation');
    popup('.slider__slide', '.popup__img');
    map();
    
});







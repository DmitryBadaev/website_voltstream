import {calcScroll} from '../modules/calcScroll';

function popup (triggerSelector, popupSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
          popup = document.querySelector(popupSelector),
          btnClose = document.querySelector('.popup__close'),
          popupImage = document.querySelector('.popup__image'),
          scroll = calcScroll();
    trigger.forEach((i)=> {
        i.addEventListener('click', ()=>{
            popup.classList.add('active');
            document.querySelector('body').classList.add('lock');
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${scroll}px`;
            if(i.classList.contains('slider__slide')){
                popupImage.src = i.childNodes[1].src;
            }
            
            
            
        });
    })
    document.addEventListener('click', (e) => {
        if(e.target == btnClose || e.target == popup) {
            popup.classList.remove('active');
            document.querySelector('body').classList.remove('lock');
            document.body.style.overflow = ""; 
            document.body.style.marginRight = `0px`;
        }
    });


}
export default popup;
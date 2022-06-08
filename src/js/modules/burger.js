import {calcScroll} from '../modules/calcScroll';
function burger() {
    const burgerBtn = document.querySelector('.menu__burger'),
          burgerMenu = document.querySelector('.menu__body'),
          menuLink = document.querySelectorAll('.menu__link'),
          body = document.querySelector('body'),
          phone = document.querySelector('.menu-block__tel'),
          linkDescr =document.querySelector('.menu-block__descr'),
          scroll = calcScroll();

    function openMenu() {
        burgerBtn.classList.add('active');
        burgerMenu.classList.add('active');
        body.classList.add('lock');
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
    }
    function closeMenu() {
        burgerBtn.classList.remove('active');
        burgerMenu.classList.remove('active');
        body.classList.remove('lock');
        document.body.style.overflow = ""; 
        document.body.style.marginRight = `0px`;
    }
    burgerBtn.addEventListener('click',() => {
        if(burgerBtn.classList.contains('active')){
            closeMenu();
        }else {
            openMenu();
        }
        
        
    });
    menuLink.forEach((e)=> {
        e.addEventListener('click', ()=> {
            closeMenu();
        });
    });
    phone.addEventListener('click', () => {
        closeMenu();
    });
    linkDescr.addEventListener('click', () => {
        closeMenu();
    });
}

export default burger;
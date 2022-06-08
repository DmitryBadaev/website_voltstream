function burger() {
    const burgerBtn = document.querySelector('.menu__burger'),
          burgerMenu = document.querySelector('.menu__body'),
          menuLink = document.querySelectorAll('.menu__link'),
          body = document.querySelector('body');

    burgerBtn.addEventListener('click',() => {
        burgerBtn.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        body.classList.toggle('lock');
    });
    menuLink.forEach((e)=> {
        e.addEventListener('click', ()=> {
            burgerBtn.classList.remove('active');
            burgerMenu.classList.remove('active');
            body.classList.remove('lock');
        });
    });
    
}

export default burger;
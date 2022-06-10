function replacement(imgSelector) {
    const img = document.querySelectorAll(imgSelector);
    window.addEventListener('resize', () => {
        if(window.screen.availWidth < 630) {
            
            img.forEach((item, i) => {
                item.childNodes[1].src = `assets/img/specialization/1${i+1}.png`;
            });

        }else {
            img.forEach((item, i) => {
                item.childNodes[1].src = `assets/img/specialization/${i+1}.png`;
            });
        }
    });
}
export default replacement;
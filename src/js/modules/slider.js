import Swiper, { Navigation, Pagination } from 'swiper'; 
function slider () {
    const swiper = new Swiper('.reviews-slider', {
        modules: [ Navigation, Pagination ],
        slidesPerView: 2,
        loop: true,
        speed: 400,
        spaceBetween: 15,
        autoplay: {
            delay: 500,
        },
        navigation: {
            nextEl: '.reviews-slider__next',
            prevEl: '.reviews-slider__prev'
        },
        breakpoints: {
            750: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            500: {
                slidesPerView: 3,
                spaceBetween: 30
              
            }
        }
    });
    const swiper2 = new Swiper('.gallery-slider', {
        modules: [ Navigation, Pagination ],
        slidesPerView: 1,
        loop: true,
        speed: 400,
        spaceBetween: 30,
        autoplay: {
            delay: 500,
        },
        navigation: {
            nextEl: '.gallery-slider__next',
            prevEl: '.gallery-slider__prev'
        },
        breakpoints: {
            750: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 15
              
            }
        }
    });
    const swiper3 = new Swiper('.certificate-slider', {
        modules: [ Navigation, Pagination ],
        slidesPerView: 2,
        loop: true,
        speed: 400,
        spaceBetween: 10,
        autoplay: {
            delay: 500,
        },
        navigation: {
            nextEl: '.certificate-slider__next',
            prevEl: '.certificate-slider__prev'
        },
        breakpoints: {
            750: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            500: {
                slidesPerView: 3,
                spaceBetween: 15
              
            }
        }
        
    });
}
export default slider;
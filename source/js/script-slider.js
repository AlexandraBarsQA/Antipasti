// Слайдер на главной

var swiper = new Swiper(".slider-main", {
        navigation: {
          nextEl: ".slider-main__toggle--next.swiper-button-next",
          prevEl: ".slider-main__toggle--prev.swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true,
        //autoHeight: true,
        watchSlidesProgress: true,
        slidesPerView: 1,
        //spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    680: {
      loop: true,
      slidesPerView: 2,
      //spaceBetween: 20
    },

    // when window width is >= 640px
    1180: {
      loop: true,
      slidesPerView: 3,
      //spaceBetween: 40
    }
  }
});



// Слайдер товаров

var swiper = new Swiper(".gallery-thumbs", {
        spaceBetween: 0,
        loop: false,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".gallery-top", {
        spaceBetween: 0,
        loop: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });

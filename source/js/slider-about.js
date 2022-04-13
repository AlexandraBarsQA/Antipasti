var swiper = new Swiper(".slider-about", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
      loop: true,
      speed: 2000,
      autoplay: {
        delay: 600,
        disableOnInteraction: false,
    },
        // Скролл мышью
        //mousewheel: {
            //sensitivity: 1,
            //eventsTarget: ".slider-main__wrap",
  });


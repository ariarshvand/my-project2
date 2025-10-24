var swiper = new Swiper(".mainSwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
  });

  var swiper = new Swiper(".catSwiper", {
    slidesPerView: 7,
    spaceBetween: 30,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  var swiper = new Swiper(".newSwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  var swiper = new Swiper(".articlesSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
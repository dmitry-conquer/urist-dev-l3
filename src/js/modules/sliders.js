import Swiper, { Pagination, Navigation } from "swiper";

const quotesSlider = document.querySelector(".quotes-slider");
if (quotesSlider) {
  new Swiper(quotesSlider, {
    modules: [Navigation],
    wrapperClass: "quotes-slider-wrapper",
    slideClass: "quotes-slider-slide",
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 1200,

    navigation: {
      prevEl: ".quotes-prev",
      nextEl: ".quotes-next",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      590: {
        slidesPerView: 2,
      },
    },
  });
}

const commentsSlider = document.querySelector(".comments-slider");
if (commentsSlider) {
  new Swiper(commentsSlider, {
    modules: [Pagination, Navigation],
    wrapperClass: "comments-slider-wrapper",
    slideClass: "comments-slider-slide",
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1200,

    pagination: {
      el: ".pagination-comments",
      clickable: true,
    },
    navigation: {
      prevEl: ".comments-prev",
      nextEl: ".comments-next",
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

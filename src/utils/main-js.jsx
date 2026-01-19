/* ===================================================================
    Author          : Modina Theme
    Version         : 1.0
* ================================================================= */

export function initTheme() {
  const $ = window.jQuery || window.$;
  if (!$) {
    console.error("jQuery not loaded");
    return;
  }

  "use strict";

  //>> Mobile Menu Js Start <<//
  if ($("#mobile-menu").length && !$(".mean-container").length) {
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "1199",
    meanExpand: ['<i class="far fa-plus"></i>'],
  });
}


  //>> Sidebar Toggle Js Start <<//
  $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
    $(".offcanvas__info").removeClass("info-open");
    $(".offcanvas__overlay").removeClass("overlay-open");
  });

  $(".sidebar__toggle").on("click", function () {
    $(".offcanvas__info").addClass("info-open");
    $(".offcanvas__overlay").addClass("overlay-open");
  });

  //>> Body Overlay Js Start <<//
  $(".body-overlay").on("click", function () {
    $(".offcanvas__area").removeClass("offcanvas-opened");
    $(".df-search-area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
  });

  //>> Sticky Header Js Start <<//
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 250) {
      $("#header-sticky").addClass("sticky");
    } else {
      $("#header-sticky").removeClass("sticky");
    }
  });

  //>> Masonry Layout Start <<//
  if ($(".masonry-layout").length) {
    $(".masonry-layout").imagesLoaded(function () {
      $(".masonry-layout").isotope({
        layoutMode: "masonry",
      });
    });
  }

  //>> Post Filter Start <<//
  if ($(".post-filter").length) {
    const postFilterList = $(".post-filter li");

    $(".filter-layout").isotope({
      filter: ".filter-item",
      animationOptions: {
        duration: 500,
        easing: "linear",
        queue: false,
      },
    });

    postFilterList.on("click", function () {
      const Self = $(this);
      const selector = Self.attr("data-filter");

      postFilterList.removeClass("active");
      Self.addClass("active");

      $(".filter-layout").isotope({
        filter: selector,
        animationOptions: {
          duration: 500,
          easing: "linear",
          queue: false,
        },
      });

      return false;
    });
  }

  //>> Dynamic Filter Counter Start <<//
  if ($(".post-filter.has-dynamic-filter-counter").length) {
    const activeFilterItem = $(".post-filter.has-dynamic-filter-counter").find("li");

    activeFilterItem.each(function () {
      const filterElement = $(this).data("filter");
      const count = $(".filter-layout").find(filterElement).length;
      $(this).append("<sup>[" + count + "]</sup>");
    });
  }

  //>> Wow Animation Start <<//
  if (window.WOW) {
    new WOW().init();
  }

  //>> Scroll Progress Start <<//
  const scrollPath = document.querySelector(".scroll-up path");
  if (scrollPath) {
    const pathLength = scrollPath.getTotalLength();
    scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
    scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
    scrollPath.style.strokeDashoffset = pathLength;
    scrollPath.getBoundingClientRect();
    scrollPath.style.transition =
      scrollPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";

    const updateScroll = function () {
      const scrollTotal = $(window).scrollTop();
      const height = $(document).height() - $(window).height();
      const scrollTotalHeight = pathLength - (scrollTotal * pathLength) / height;
      scrollPath.style.strokeDashoffset = scrollTotalHeight;
    };

    updateScroll();
    $(window).on("scroll", updateScroll);
  }

  const offset = 50;

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > offset) {
      $(".scroll-up").addClass("active-scroll");
    } else {
      $(".scroll-up").removeClass("active-scroll");
    }
  });

  /*-- Price Range --*/
  function priceFilter() {
    if ($(".price-ranger").length && $("#slider-range").length) {
      $("#slider-range").slider({
        range: true,
        min: 56,
        max: 1578,
        values: [56, 789],
        slide: function (event, ui) {
          $(".ranger-min-max-block .min").text("$" + ui.values[0]);
          $(".ranger-min-max-block .max").text("$" + ui.values[1]);
        },
      });

      $(".ranger-min-max-block .min").text(
        "$" + $("#slider-range").slider("values", 0)
      );
      $(".ranger-min-max-block .max").text(
        "$" + $("#slider-range").slider("values", 1)
      );
    }
  }

  priceFilter();

  //>> Mouse Cursor Start <<//
  function mousecursor() {
    if ($("body").length) {
      const inner = document.querySelector(".cursor-inner");
      const outer = document.querySelector(".cursor-outer");
      let mouseX = 0;
      let mouseY = 0;
      let isStuck = false;

      window.onmousemove = function (e) {
        if (!isStuck && outer) {
          outer.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
        if (inner) {
          inner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
        mouseY = e.clientY;
        mouseX = e.clientX;
      };

      $("body").on("mouseenter", "a, .cursor-pointer", function () {
        inner?.classList.add("cursor-hover");
        outer?.classList.add("cursor-hover");
      });

      $("body").on("mouseleave", "a, .cursor-pointer", function () {
        inner?.classList.remove("cursor-hover");
        outer?.classList.remove("cursor-hover");
      });

      if (inner) inner.style.visibility = "visible";
      if (outer) outer.style.visibility = "visible";
    }
  }

  mousecursor();
  //>> Image Popup Start <<//
  if ($(".img-popup").length) {
    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  }

  if ($(".video-popup").length) {
    $(".video-popup").magnificPopup({
      type: "iframe",
      callbacks: {},
    });
  }

  //>> Counterup Start <<//
  if ($(".count").length) {
    $(".count").counterUp({
      delay: 15,
      time: 4000,
    });
  }

  //>> Hero Slider 1 Start <<//
  const sliderActive2 = ".hero-slider";
  let sliderInit2 = null;

  if (document.querySelector(sliderActive2)) {
    sliderInit2 = new window.Swiper(sliderActive2, {
      loop: true,
      slidesPerView: 1,
      effect: "fade",
      speed: 2000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
    });
  }

  //>> Hero Slider 2 Start <<//
  const sliderActive3 = ".hero-slider2";
  let sliderInit4 = null;

  if (document.querySelector(sliderActive3)) {
    sliderInit4 = new window.Swiper(sliderActive3, {
      loop: true,
      slidesPerView: 1,
      effect: "fade",
      speed: 3000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
    });
  }

  function animated_swiper(selector, init) {
    if (!init) return;

    const animated = function () {
      $(`${selector} [data-animation]`).each(function () {
        const anim = $(this).data("animation");
        const delay = $(this).data("delay");
        const duration = $(this).data("duration");

        $(this)
          .removeClass(`anim${anim}`)
          .addClass(`${anim} animated`)
          .css({
            webkitAnimationDelay: delay,
            animationDelay: delay,
            webkitAnimationDuration: duration,
            animationDuration: duration,
          })
          .one("animationend", function () {
            $(this).removeClass(`${anim} animated`);
          });
      });
    };

    animated();

    init.on("slideChange", function () {
      $(`${selector} [data-animation]`).removeClass("animated");
    });

    init.on("slideChange", animated);
  }

  animated_swiper(sliderActive2, sliderInit2);
  animated_swiper(sliderActive3, sliderInit4);

  //>> Nice Select Start <<//
  if ($("select").length && $.fn.niceSelect) {
    $("select").niceSelect();
  }
  //>> Progress Bar Start <<//
  if ($(".count-bar").length && $.fn.appear) {
    $(".count-bar").appear(
      function () {
        const el = $(this);
        const percent = el.data("percent");
        el.css("width", percent).addClass("counted");
      },
      {
        accY: -50,
      }
    );
  }

  //>> Brand Slider Start <<//
  if (document.querySelector(".brand-slider")) {
    new window.Swiper(".brand-slider", {
      spaceBetween: 95,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".dot",
        clickable: true,
      },
      breakpoints: {
        475: { slidesPerView: 2 },
        767: { slidesPerView: 3 },
        992: { slidesPerView: 3 },
        1199: { slidesPerView: 6 },
      },
    });
  }

  //>> Case Study Slider 1 Start <<//
  if (document.querySelector(".caseStudy")) {
    new window.Swiper(".caseStudy", {
      spaceBetween: 24,
      loop: true,
      centeredSlides: true,
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".dot",
        clickable: true,
      },
      breakpoints: {
        1499: { slidesPerView: 3.2 },
        1199: { slidesPerView: 2 },
        750: { slidesPerView: 2 },
        700: { slidesPerView: 1 },
      },
    });
  }

  //>> Case Study Slider 2 Start <<//
  if (document.querySelector(".caseStudy2")) {
    new window.Swiper(".caseStudy2", {
      spaceBetween: 24,
      loop: true,
      centeredSlides: true,
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".dot",
        clickable: true,
      },
      breakpoints: {
        1499: { slidesPerView: 2.9 },
        1199: { slidesPerView: 2 },
        750: { slidesPerView: 2 },
        700: { slidesPerView: 1 },
      },
    });
  }

  //>> Features Slider Start <<//
  if (document.querySelector(".features-slider")) {
    new window.Swiper(".features-slider", {
      spaceBetween: 50,
      speed: 2000,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
      breakpoints: {
        1499: { slidesPerView: 5 },
        1199: { slidesPerView: 4 },
        991: { slidesPerView: 3 },
        767: { slidesPerView: 3 },
        575: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
      },
    });
  }
  //>> Testimonial Slider 1 Start <<//
  if (document.querySelector(".testimonial-slide")) {
    new window.Swiper(".testimonial-slide", {
      spaceBetween: 0,
      loop: true,
      slidesPerView: 1,
      centeredSlides: true,
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
    });
  }

  //>> Testimonial Slider 2 Start <<//
  if (document.querySelector(".testimonial-slide-2")) {
    new window.Swiper(".testimonial-slide-2", {
      spaceBetween: 30,
      loop: true,
      slidesPerView: 1,
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".dot",
        clickable: true,
      },
      breakpoints: {
        992: { slidesPerView: 2 },
      },
    });
  }

  //>> Testimonial Slider 3 Start <<//
  if (document.querySelector(".testimonial-slide-3")) {
    new window.Swiper(".testimonial-slide-3", {
      spaceBetween: 0,
      loop: true,
      slidesPerView: 1,
      centeredSlides: true,
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
    });
  }

  //>> Testimonial Slider 4 Start <<//
  if (document.querySelector(".testimonial-4")) {
    new window.Swiper(".testimonial-4", {
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".dot",
        clickable: true,
      },
      breakpoints: {
        1499: { slidesPerView: 3.5 },
        1199: { slidesPerView: 2 },
        750: { slidesPerView: 2 },
        700: { slidesPerView: 1 },
      },
    });
  }

  //>> Service Slider Start <<//
  if (document.querySelector(".service-slide")) {
    new window.Swiper(".service-slide", {
      spaceBetween: 20,
      loop: true,
      speed: 1000,
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
      pagination: {
        el: ".dot",
        clickable: true,
      },
      breakpoints: {
        1699: { slidesPerView: 4 },
        1599: { slidesPerView: 4 },
        1399: { slidesPerView: 4 },
        1199: { slidesPerView: 3 },
        991: { slidesPerView: 2 },
        767: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
      },
    });
  }

  //>> Service Slider 2 Start <<//
  if (document.querySelector(".service-slide-2")) {
    new window.Swiper(".service-slide-2", {
      spaceBetween: 20,
      loop: true,
      speed: 2000,
      pagination: {
        el: ".dot",
        clickable: true,
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1699: { slidesPerView: 3.5 },
        1599: { slidesPerView: 3 },
        1399: { slidesPerView: 2.5 },
        1199: { slidesPerView: 2 },
        991: { slidesPerView: 2 },
        667: { slidesPerView: 1.3 },
        0: { slidesPerView: 1 },
      },
    });
  }
  //>> Text Slider Start <<//
  if (document.querySelector(".text-slider")) {
    new window.Swiper(".text-slider", {
      slidesPerView: "auto",
      spaceBetween: 35,
      centeredSlides: true,
      loop: true,
      speed: 6000,
      allowTouchMove: false,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
    });
  }

  if (document.querySelector(".text-slider-2")) {
    new window.Swiper(".text-slider-2", {
      slidesPerView: "auto",
      spaceBetween: 35,
      centeredSlides: true,
      loop: true,
      speed: 6000,
      allowTouchMove: false,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
    });
  }

  //>> Blog Post Slider Start <<//
  if (document.querySelector(".blog-post-slider")) {
    new window.Swiper(".blog-post-slider", {
      slidesPerView: "auto",
      spaceBetween: 35,
      centeredSlides: true,
      loop: true,
      speed: 2000,
      allowTouchMove: false,
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
    });
  }

  //>> Add Payment Amount Area Start <<//
  $(document).on("click", ".amount-btn", function () {
    $(".amount-btn").removeClass("active");
    $(this).addClass("active");

    const buttonValue = $(this).text();
    $(".addAmount-value").val(buttonValue);
  });

  //>> Search Popup Start <<//
  const $searchWrap = $(".search-wrap");
  const $navSearch = $(".nav-search");
  const $searchClose = $("#search-close");

  $(".search-trigger").on("click", function (e) {
    e.preventDefault();
    $searchWrap.animate({ opacity: "toggle" }, 500);
    $navSearch.add($searchClose).addClass("open");
  });

  $(".search-close").on("click", function (e) {
    e.preventDefault();
    $searchWrap.animate({ opacity: "toggle" }, 500);
    $navSearch.add($searchClose).removeClass("open");
  });

  function closeSearch() {
    $searchWrap.fadeOut(200);
    $navSearch.add($searchClose).removeClass("open");
  }

  $(document.body).on("click", function () {
    closeSearch();
  });

  $(".search-trigger, .main-search-input").on("click", function (e) {
    e.stopPropagation();
  });

  //>> Scroll To Top Start <<//
  $(".scroll-up").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      900
    );
    return false;
  });
}

/* ================= Loader ================= */
export function loader() {
  const $ = window.jQuery || window.$;
  if (!$) return;

  $(window).on("load", function () {
    $(".preloader").addClass("loaded");
    $(".preloader").delay(600).fadeOut();
  });
}

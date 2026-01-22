/* ===================================================================
   Author  : Modina Theme (Clean Refactor)
   Version : 2.0
   Purpose : Core UI logic (Swiper + Vanilla, NO jQuery)
=================================================================== */

"use strict";

/* =====================================================
   DOM READY (SINGLE ENTRY POINT)
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initScrollToTop();
  initMobileMenu();
  initOffcanvas();
  initSearchPopup();
  initDataBackground();

  initTestimonialSlider();
  initHeroSlider();
});

/* =====================================================
   STICKY HEADER
===================================================== */
function initStickyHeader() {
  const header = document.getElementById("header-sticky");
  if (!header) return;

  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 250);
  });
}

/* =====================================================
   SCROLL TO TOP
===================================================== */
function initScrollToTop() {
  const btn = document.querySelector(".scroll-up");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("active-scroll", window.scrollY > 50);
  });

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* =====================================================
   MOBILE MENU (OFFCANVAS)
===================================================== */
function initMobileMenu() {
  const toggle = document.querySelector(".sidebar__toggle");
  const panel = document.querySelector(".offcanvas__info");
  const overlay = document.querySelector(".offcanvas__overlay");
  const close = document.querySelector(".offcanvas__close");

  if (!toggle || !panel || !overlay) return;

  toggle.addEventListener("click", () => {
    panel.classList.add("info-open");
    overlay.classList.add("overlay-open");
  });

  [overlay, close].forEach((el) => {
    el?.addEventListener("click", () => {
      panel.classList.remove("info-open");
      overlay.classList.remove("overlay-open");
    });
  });
}

/* =====================================================
   SEARCH POPUP
===================================================== */
function initSearchPopup() {
  const trigger = document.querySelector(".search-trigger");
  const wrap = document.querySelector(".search-wrap");
  const close = document.querySelector(".search-close");

  if (!trigger || !wrap) return;

  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    wrap.classList.add("open");
  });

  close?.addEventListener("click", (e) => {
    e.preventDefault();
    wrap.classList.remove("open");
  });
}
/* =====================================================
   DATA BACKGROUND
===================================================== */
function initDataBackground() {
  document.querySelectorAll("[data-background]").forEach((el) => {
    const bg = el.getAttribute("data-background");
    if (bg) el.style.backgroundImage = `url(${bg})`;
  });
}

/* =====================================================
   OFFCANVAS SIDEBAR (ALIAS SAFETY)
===================================================== */
function initOffcanvas() {
  const openBtn = document.querySelector(".sidebar__toggle");
  const panel = document.querySelector(".offcanvas__info");
  const overlay = document.querySelector(".offcanvas__overlay");
  const closeBtn = document.querySelector(".offcanvas__close");

  if (!openBtn || !panel || !overlay) return;

  openBtn.addEventListener("click", () => {
    panel.classList.add("info-open");
    overlay.classList.add("overlay-open");
  });

  [overlay, closeBtn].forEach((el) => {
    el?.addEventListener("click", () => {
      panel.classList.remove("info-open");
      overlay.classList.remove("overlay-open");
    });
  });
}

/* =====================================================
   HERO SLIDER
===================================================== */
function initHeroSlider() {
  initSwiper(".hero-slider", {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    speed: 2000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".array-next",
      prevEl: ".array-prev",
    },
  });
}

/* =====================================================
   FEATURES SLIDER
===================================================== */
function initFeaturesSlider() {
  initSwiper(".features-slider", {
    loop: true,
    spaceBetween: 50,
    speed: 2000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
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



/* =====================================================
   TEXT MARQUEE SLIDER
===================================================== */
function initTextSlider() {
  initSwiper(".text-slider", {
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

/* =====================================================
   BLOG POST SLIDER
===================================================== */
function initBlogSlider() {
  initSwiper(".blog-post-slider", {
    slidesPerView: "auto",
    spaceBetween: 35,
    centeredSlides: true,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".array-next",
      prevEl: ".array-prev",
    },
  });
}


/* =====================================================
   FILTER / ISOTOPE REPLACEMENT (VANILLA)
===================================================== */
function initFilterLayout() {
  const layout = document.querySelector(".filter-layout");
  const buttons = document.querySelectorAll(".post-filter li");

  if (!layout || !buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      Array.from(layout.children).forEach((item) => {
        if (filter === "*" || item.matches(filter)) {
          item.style.display = "";
          requestAnimationFrame(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          });
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.95)";
          setTimeout(() => (item.style.display = "none"), 300);
        }
      });
    });
  });
}

/* =====================================================
   DYNAMIC FILTER COUNTER
===================================================== */
function initFilterCounter() {
  const filters = document.querySelectorAll(
    ".post-filter.has-dynamic-filter-counter li"
  );
  const layout = document.querySelector(".filter-layout");

  if (!filters.length || !layout) return;

  filters.forEach((item) => {
    const selector = item.getAttribute("data-filter");
    if (!selector || selector === "*") return;

    const count = layout.querySelectorAll(selector).length;
    const sup = document.createElement("sup");
    sup.textContent = `[${count}]`;
    item.appendChild(sup);
  });
}

/* =====================================================
   SIMPLE MASONRY (CSS GRID FALLBACK)
===================================================== */
function initMasonry() {
  const masonry = document.querySelector(".masonry-layout");
  if (!masonry) return;

  masonry.style.display = "grid";
  masonry.style.gridTemplateColumns =
    "repeat(auto-fill, minmax(250px, 1fr))";
  masonry.style.gridAutoRows = "10px";

  const resizeItems = () => {
    Array.from(masonry.children).forEach((item) => {
      const span = Math.ceil(item.offsetHeight / 10);
      item.style.gridRowEnd = `span ${span}`;
    });
  };

  window.addEventListener("resize", resizeItems);
  resizeItems();
}

/* =====================================================
   CURSOR EFFECT (SAFE VANILLA)
===================================================== */
function initCursor() {
  const inner = document.querySelector(".cursor-inner");
  const outer = document.querySelector(".cursor-outer");

  if (!inner || !outer) return;

  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    inner.style.transform = `translate(${x}px, ${y}px)`;
    outer.style.transform = `translate(${x}px, ${y}px)`;
  });

  document.querySelectorAll("a, .cursor-pointer").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      inner.classList.add("cursor-hover");
      outer.classList.add("cursor-hover");
    });
    el.addEventListener("mouseleave", () => {
      inner.classList.remove("cursor-hover");
      outer.classList.remove("cursor-hover");
    });
  });
}
/* =====================================================
   COUNTERS (VANILLA – counterUp replacement)
===================================================== */
function initCounters() {
  const counters = document.querySelectorAll(".count");
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const target = Number(el.textContent);
        let current = 0;
        const step = Math.max(1, Math.floor(target / 120));

        const update = () => {
          current += step;
          if (current >= target) {
            el.textContent = target;
          } else {
            el.textContent = current;
            requestAnimationFrame(update);
          }
        };

        update();
        obs.unobserve(el);
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((el) => observer.observe(el));
}

/* =====================================================
   IMAGE POPUP (LIGHTWEIGHT)
===================================================== */
function initImagePopup() {
  const links = document.querySelectorAll(".img-popup");
  if (!links.length) return;

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const src = link.getAttribute("href") || link.src;
      if (!src) return;

      const overlay = document.createElement("div");
      overlay.className = "popup-overlay";
      overlay.innerHTML = `<img src="${src}" alt="">`;

      overlay.addEventListener("click", () => overlay.remove());
      document.body.appendChild(overlay);
    });
  });
}



/* =====================================================
   MASTER INIT (SINGLE ENTRY POINT)
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initScrollToTop();
  initMobileMenu();
  initSearchPopup();
  initDataBackground();

  initHeroSlider();
  initFeaturesSlider();
  initTextSlider();
  initBlogSlider();

  initCounters();
  initFilterLayout();
  initFilterCounter();
  initMasonry();
  initCursor();
  initImagePopup();
});

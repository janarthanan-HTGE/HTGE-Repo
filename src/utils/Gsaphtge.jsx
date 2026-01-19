import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

/* =====================================================
   MAIN INIT FUNCTION
===================================================== */
export function initGsapHtge() {
  textInvertScroll();
  splitTextAnimation();
  textSplitUp();
  heroTextPlayUp();
  heroButtonBounce();
  drawBorder();
  imageReveal();      
  hoverReveal();
  dataBackground();
}


/* =====================================================
   TEXT INVERT WITH SCROLL
===================================================== */
function textInvertScroll() {
  const elements = document.querySelectorAll(".bw-split-text");
  if (!elements.length) return;

  const split = new SplitText(elements, { type: "lines" });

  split.lines.forEach((line) => {
    gsap.to(line, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: line,
        scrub: 1,
        start: "top 90%",
        end: "bottom center",
      },
    });
  });
}

/* =====================================================
   SPLIT TEXT ANIMATION
===================================================== */
function splitTextAnimation() {
  document.querySelectorAll(".split-text").forEach((el) => {
    const split = new SplitText(el, {
      type: "lines,words,chars",
      linesClass: "split-line",
    });

    gsap.set(el, { perspective: 400 });

    let fromVars = { opacity: 0 };
    if (el.classList.contains("right")) fromVars.x = 50;
    if (el.classList.contains("left")) fromVars.x = -50;
    if (el.classList.contains("up")) fromVars.y = 80;
    if (el.classList.contains("down")) fromVars.y = -80;

    gsap.fromTo(
      split.chars,
      fromVars,
      {
        x: 0,
        y: 0,
        rotateX: 0,
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.02,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      }
    );
  });
}

/* =====================================================
   TEXT SPLIT UP SCROLL
===================================================== */
function textSplitUp() {
  const elements = gsap.utils.toArray(".text-splite-up");
  if (!elements.length) return;

  elements.forEach((el) => {
    const split = new SplitText(el, { type: "words,lines" });
    gsap.set(el, { perspective: 400 });

    gsap.from(split.lines, {
      opacity: 0,
      rotationX: -80,
      transformOrigin: "top center -50",
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 110%",
        end: "bottom 100%",
        scrub: 1,
      },
    });
  });
}

/* =====================================================
   HERO TEXT PLAY UP
===================================================== */
function heroTextPlayUp() {
  if ($('.tp-play-up, .tp-play-up-2').length > 0) {
    const isMobile = window.innerWidth <= 767;

    gsap.utils.toArray(".tp-play-up, .tp-play-up-2").forEach(el => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      gsap.set(el, { perspective: 400 });

      let h1Clone = null;

      // 🔥 REMOVE H1 BEFORE SPLIT (MOBILE ONLY)
      if (isMobile) {
        const h1 = el.querySelector("h1");
        if (h1) {
          h1Clone = h1.cloneNode(true);
          h1.remove();
        }
      }

      // SPLIT REMAINING CONTENT ONLY
      const split = new SplitText(el, { type: "lines" });

      tl.from(split.lines, {
        duration: 1,
        delay: 0.7,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });

      // 🔥 PUT H1 BACK (UNCHANGED)
      if (isMobile && h1Clone) {
        el.prepend(h1Clone);
      }
    });
  }
}


/* =====================================================
   HERO BUTTON BOUNCE
===================================================== */
function heroButtonBounce() {
  const triggers = document.querySelectorAll(".tp-btn-trigger");
  if (!triggers.length) return;

  gsap.set(".tp-btn-bounce", {
    y: -150,
    opacity: 0,
  });

  gsap.utils.toArray(".tp-btn-bounce").forEach((btn) => {
    const trigger = btn.closest(".tp-btn-trigger");
    if (!trigger) return;

    gsap.to(btn, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      delay: 1,
      ease: "bounce.out",
      scrollTrigger: {
        trigger,
        start: "top center",
      },
    });
  });
}

/* =====================================================
   DRAW BORDER
===================================================== */
function drawBorder() {
  const borders = document.querySelectorAll(".bw-draw-border");
  if (!borders.length) return;

  borders.forEach((line) => {
    gsap.set(line, { width: 0 });

    gsap.to(line, {
      width: "100%",
      duration: 3,
      delay: 0.5,
      scrollTrigger: {
        trigger: line,
        start: "top 90%",
        end: "bottom 80%",
        scrub: 1,
      },
    });
  });
}

/* =====================================================
   IMAGE REVEAL ANIMATION
===================================================== */
function imageReveal() {
  reveal(".reveal-right", "x", -100, 1.3);
  reveal(".reveal-left", "x", 100, 1.3);
  reveal(".reveal-bottom", "y", -100, 1.3);
}

function reveal(selector, axis, percent, scale) {
  gsap.utils.toArray(selector).forEach((el) => {
    const img = el.querySelector("img");
    if (!img) return;

    gsap.set(el, { overflow: "hidden" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 85%",   // 🔥 REQUIRED
        toggleActions: "play none none reverse",
        markers: false,     // set true to debug
      },
    });

    tl.from(el, {
      duration: 1.2,
      [`${axis}Percent`]: -percent,
      ease: "power2.out",
    }).from(
      img,
      {
        duration: 1.2,
        [`${axis}Percent`]: percent,
        scale,
        ease: "power2.out",
      },
      "<"
    );
  });
}


/* =====================================================
   HOVER IMAGE FOLLOW
===================================================== */
function hoverReveal() {
  const items = document.querySelectorAll(".bw-hover-image");
  if (!items.length) return;

  items.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const img = item.children[1];
      if (!img) return;

      img.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}

/* =====================================================
   DATA BACKGROUND
===================================================== */
function dataBackground() {
  document
    .querySelectorAll("[data-background]")
    .forEach((el) => {
      const bg = el.getAttribute("data-background");
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
      }
    });
}
/* =====================================================
   CLEANUP / DESTROY (REACT SAFETY)
===================================================== */

/**
 * Call this when a component unmounts
 * Prevents duplicate animations & memory leaks
 */
export function destroyGsapHtge() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.globalTimeline.clear();
}

/* =====================================================
   OPTIONAL: RE-INIT HELPERS
===================================================== */

/**
 * Use this if content changes dynamically
 * (route change, conditional rendering, etc.)
 */
export function refreshGsapHtge() {
  ScrollTrigger.refresh();
}

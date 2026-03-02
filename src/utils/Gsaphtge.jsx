import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
export function initGsapHtge() {
  splitTextAnimation();
  heroTextPlayUp();
  heroButtonPlayUp();   
  dataBackground();
}

function splitTextAnimation() {
  document.querySelectorAll(".split-text:not(.swiper-slide *)").forEach((el) => {

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

function heroButtonPlayUp() {
  const buttons = document.querySelectorAll(".tp-btn-play-up");

  buttons.forEach((btn) => {
    gsap.set(btn, { perspective: 400 });

    gsap.fromTo(
      btn,
      {
        opacity: 0,
        rotationX: -80,
      },
      {
        opacity: 1,
        rotationX: 0,
        duration: 1,
        delay: 1, 
        force3D: true,
        transformOrigin: "top center -50",
        ease: "power2.out",
      }
    );
  });
}

function heroTextPlayUp() {
  const playUpElements = document.querySelectorAll(
    ".tp-play-up, .tp-play-up-2"
  );

  if (playUpElements.length > 0) {

    const isMobile = window.innerWidth <= 767;

    playUpElements.forEach((el) => {
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

      if (isMobile) {
        const h1 = el.querySelector("h1");
        if (h1) {
          h1Clone = h1.cloneNode(true);
          h1.remove();
        }
      }

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

      if (isMobile && h1Clone) {
        el.prepend(h1Clone);
      }
    });
  }
}

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
export function destroyGsapHtge() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.globalTimeline.clear();
}

export function refreshGsapHtge() {
  ScrollTrigger.refresh();
}

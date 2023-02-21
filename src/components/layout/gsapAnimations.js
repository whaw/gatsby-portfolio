import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function initiateGsap() {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)

  // give sections motion on scroll
  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      markers: false,
      lazy: false,
      onEnter: function () { animateFrom(elem) },
      onEnterBack: function () { animateFrom(elem, -1) },
      onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });

  // give hero images motion on scroll
  const HERO_SCROLLTRIGGER_CONFIG = {
    trigger: ".hero",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  }

  gsap
    .to(".hero__truck", {
      rotation: -50,
      x: 0,
      y: 0,
      ease: "none",
      scrollTrigger: HERO_SCROLLTRIGGER_CONFIG
    })

  gsap
    .to(".hero__sketch", {
      y: 200,
      ease: "none",
      scrollTrigger: HERO_SCROLLTRIGGER_CONFIG
    })

  gsap
    .to(".hero__tree", {
      rotation: 50,
      x: 0,
      y: 0,
      ease: "none",
      scrollTrigger: HERO_SCROLLTRIGGER_CONFIG
    })
}

// left and right animation helpers for sections
export function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
    stagger: 1,
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

export function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

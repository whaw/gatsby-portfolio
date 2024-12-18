import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initiateGsap() {
  gsap.registerPlugin(ScrollTrigger);

  // SECTION - SCROLL ANIMATION
  // helpers
  const hide = (elem) => gsap.set(elem, { autoAlpha: 0 });
  const animateFrom = (elem, direction = 1) => {
    let x = 0,
      y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromBottom")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromTop")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = `translate(${x}px, ${y}px)`;
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x, y, autoAlpha: 1 }, {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto"
    });
  };

  // give sections a slight motion animation on scroll
  gsap.utils.toArray(".gs_reveal").forEach((elem) => {
    hide(elem);
    ScrollTrigger.create({
      trigger: elem,
      markers: false,
      lazy: false,
      onEnter: () => animateFrom(elem),
      onEnterBack: () => animateFrom(elem, -1),
      onLeave: () => hide(elem),
    });
  });

  // MAIN NAV - TOGGLE ACTIVE CLASS
  const sections = gsap.utils.toArray(document.getElementsByTagName("section")).slice(1); // omit hero section
  const navLinks = gsap.utils.toArray(document.getElementById("main-nav-links").getElementsByClassName("nav-link"));

  function toggleActiveClass(i) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    });
    if (i !== null) {
      navLinks[i].classList.add("active");
      navLinks[i].setAttribute("aria-current", "section");
    }
  }

  sections.forEach((section, i) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        markers: false,
        start: "top +=15%",
        end: "bottom +=15%",
        onEnter: () => toggleActiveClass(i),
        onEnterBack: () => toggleActiveClass(i),
        onLeave: () => toggleActiveClass(null),
        onLeaveBack: () => toggleActiveClass(null),
      },
    });
  });

  // HERO - ANIMATION
  // animate hero images when entering and leaving hero section
  const heroScrollTriggerConfig = {
    trigger: ".hero",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  };

  gsap.to(".hero__truck", {
    rotation: -50,
    x: 0,
    y: 0,
    ease: "none",
    scrollTrigger: heroScrollTriggerConfig,
  });

  gsap.to(".hero__sketch", {
    y: 200,
    ease: "none",
    scrollTrigger: heroScrollTriggerConfig,
  });

  gsap.to(".hero__tree", {
    rotation: 50,
    x: 0,
    y: 0,
    ease: "none",
    scrollTrigger: heroScrollTriggerConfig,
  });
}

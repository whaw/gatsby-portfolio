import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initiateGsap() {
  gsap.registerPlugin(ScrollTrigger);

  /* GS_REVEAL CLASS ELEMENTS
  give slight motion entering and leaving
  ----------------------------------------- */
  // Animate elements
  const animateFrom = (elem: HTMLElement, direction = 1) => {
    // console.log('direction', direction);
    let x = 0,
      y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }

    gsap.fromTo(elem, { x: x, y: y }, {
      duration: 1.25,
      x: 0,
      y: 0,
      ease: "expo",
      overwrite: true
    });
  };

  // Track gs_reveal classed elements
  const elements = gsap.utils.toArray(".gs_reveal") as HTMLElement[];
  
  elements.forEach((elem) => {
    ScrollTrigger.create({
      trigger: elem,
      markers: false,
      once: true, // Ensure animates once
      onEnter: () => animateFrom(elem),
      onEnterBack: () => animateFrom(elem, -1),
    });
  });

  /* MAIN NAV - TOGGLE ACTIVE CLASS
  ----------------------------------------- */
  const sections = Array.from(document.getElementsByTagName("section")).slice(1); // omit hero section

  // Get nav links
  const navContainer = document.getElementById("header__main-nav-links");
  if (!navContainer) return;

  const navLinks = Array.from(navContainer.getElementsByClassName("nav-link"))
  .filter((el): el is HTMLElement => el instanceof HTMLElement);


  // Toggle active class
  const toggleActiveClass = (i) => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    });
    if (i !== null) {
      navLinks[i].classList.add("active");
      navLinks[i].setAttribute("aria-current", "section");
    }
  };

  // Track entering and leaving sections
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
  const heroTriggerConfig = {
    trigger: ".hero",
    start: "top top",
    end: "bottom bottom",
    x: 0,
    y: 0,
    ease: "none",
    scrub: true,
  };

  gsap.to(".hero__truck", {
    scrollTrigger: heroTriggerConfig,
    rotation: -50,
  });

  gsap.to(".hero__sketch", {
    scrollTrigger: heroTriggerConfig,
    y: 200,
  });

  gsap.to(".hero__tree", {
    scrollTrigger: heroTriggerConfig,
    rotation: 50,
  });
}
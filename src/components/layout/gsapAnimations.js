import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function initiateGsap() {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)

  // give sections motion on scroll
  // ----------------------------
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

    // scrollspy for main nav (highlight current link)
    // ----------------------------
    let sections = document.getElementsByTagName("section")
    sections = gsap.utils.toArray(sections).splice(1)

    let navLinks = document.getElementsByClassName("nav-link")
    navLinks = gsap.utils.toArray(navLinks)

    function toggleActiveClass(id, i) {
      navLinks.forEach(link => {
        link.classList.remove("active")
        link.removeAttribute("aria-current")
      })
      if (!!id) {
        navLinks[i].classList.add("active")
        navLinks[i].setAttribute("aria-current", "section")
      }
    }

    sections.forEach((section, i) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          markers: false,
          start: "top +=15%",
          end: "bottom +=15%",
          onEnter: () => toggleActiveClass(section.id, i),
          onEnterBack: () => toggleActiveClass(section.id, i),
          onLeave: () => toggleActiveClass(null, i),
          onLeaveBack: () => toggleActiveClass(null, i),
        },
      });
    })
  });

  // give hero images motion on scroll
  // -------------------------
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

// section helpers: motion left, motion right and hide
// ----------------------
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
  gsap.fromTo(elem, { x: x, y: y, autoAlpha: 1 }, { // autoAlpha: 0
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

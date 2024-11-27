import React, { useState, useEffect, memo } from "react";

import { cssAnimations } from "../assets/js/cssAnimations";
import { jsSiteUtils } from "../assets/js/jsSiteUtils";

import HeroHeaders from "./HeroHeaders";
import Tools from "./Tools";
import HeroImages from "./HeroImages";

const Hero = memo(({ heroAnimDetails, toolAnimDetails }) => {
  const [animPlayed, setAnimPlayed] = useState(false);
  const heroSection = ".js_hero";

  useEffect(() => {
    const events = ["resize", "scroll"];

    const handleScrollResize = jsSiteUtils.debounce(() => {
      if (jsSiteUtils.inView(heroSection)) {
        playHeroAnimation();
      }
    }, 100);

    if (!jsSiteUtils.inView(heroSection)) {
      // if hero is not in view, add event listeners
      events.forEach(event => {
        window.addEventListener(event, handleScrollResize);
      })
    } else {
      // play hero animation
      playHeroAnimation();
    }

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, handleScrollResize);
      })
    }
  }, []);


  function playHeroAnimation() {
    if (!animPlayed) {
      cssAnimations(heroAnimDetails);
      cssAnimations(toolAnimDetails);
      setAnimPlayed(true);
    }
  }

  return (
    <section className="hero position-relative js_hero mt-5 mt-md-7 pt-0">
      <HeroHeaders />
      <Tools toolAnimDetails={toolAnimDetails} />
      <div className="mx-auto position-absolute hero__hashTag text-white text-center d-none d-sm-block">
        #Team
      </div>
      <HeroImages />
    </section>
  )
})

export default Hero

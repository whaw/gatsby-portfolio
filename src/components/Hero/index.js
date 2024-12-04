// Hero
import React, { useState, useEffect, useCallback } from "react";

import cssAnimations from "assets/js/cssAnimations";
import jsSiteUtils from "assets/js/jsSiteUtils";

import Tools from "./Tools";
import HeroImages from "./HeroImages";

const Hero = ({ heroAnimDetails, toolAnimDetails }) => {
  const [animPlayed, setAnimPlayed] = useState(false);
  const heroSection = ".js_hero";

  const playHeroAnimation = useCallback(() => {
    if (!animPlayed) {
      cssAnimations(heroAnimDetails);
      cssAnimations(toolAnimDetails);
      setAnimPlayed(true);
    }
  }, [animPlayed, heroAnimDetails, toolAnimDetails]);

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
      });
    } else {
      // else play hero animation
      playHeroAnimation();
    }

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, handleScrollResize);
      });
    };
  }, [playHeroAnimation]);

  return (
    <section className="hero position-relative js_hero mt-5 mt-md-7 pt-0">
      {/* hero header */}
      <div className="hero__heading js_heading position-absolute text-center w-100 pt-2 pt-sm-2 pt-md-3 pt-lg-4 pt-xl-6">
        <h1 className="hero__heading__h1 mb-0 pt-sm-3 pt-md-0 gs_reveal">Be <span>responsive</span></h1>
        <a href="#introductions" role="button" aria-label="down button" className="hero__down-button js_hero_button mt-5 gs_reveal">&#x2304;</a>
      </div>
      <Tools toolAnimDetails={toolAnimDetails} />
      <div className="mx-auto position-absolute hero__hashTag text-white text-center d-none d-sm-block">
        #Team
      </div>
      <HeroImages />
    </section>
  );
};

export default Hero;

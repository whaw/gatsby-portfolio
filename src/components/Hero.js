import React, { useState, useEffect, memo } from "react";

import { cssAnimations } from "../assets/js/cssAnimations";
import { jsSiteUtils } from "../assets/js/jsSiteUtils";

import HeroHeaders from "./HeroHeaders";
import Tools from "./Tools";
import HeroImages from "./HeroImages";

const Hero = memo(({heroAnimDetails, toolAnimDetails}) => {
  const [animPlayed, setAnimPlayed] = useState(false);
  const animContainer = ".js_hero";

  useEffect(() => {
    const events = [ "load", "resize", "scroll" ];

    const handleScrollResize = jsSiteUtils.debounce(() => {
      if(jsSiteUtils.inView(animContainer)){
        initiateHeroAnimations();
      }
    }, 100);
    
    if (!jsSiteUtils.inView(animContainer)) {
      events.forEach(event => {
        window.addEventListener(event, handleScrollResize);
      })
     } else {
      initiateHeroAnimations();
     }

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, handleScrollResize);
      })
    }

  }, []);


  function initiateHeroAnimations() {
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

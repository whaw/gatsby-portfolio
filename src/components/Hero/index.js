// Hero

import React, { useState, useEffect } from "react";
import cssAnimations from "./js/cssAnimations";
import useInView from "hooks/useInView";
import Tools from "./Tools";
import HeroImages from "./HeroImages";

import toolAnimDetails from "./data/toolsAnim";
const heroAnimDetails = [
    { "selector": ".js_heading", "delay": 1000 },
    { "selector": ".js_truck", "delay": 2000 },
    { "selector": ".js_tree", "delay": 2000 },
    { "selector": ".js_sketch", "delay": 2800 },
    { "selector": ".js_hero_button", "delay": 6000 }
  ];

const Hero = () => {
  const [animPlayed, setAnimPlayed] = useState(false);
  const inView = useInView(".js_hero");

  useEffect(() => {
    if (inView && !animPlayed) {
      cssAnimations(heroAnimDetails);
      cssAnimations(toolAnimDetails);
      setAnimPlayed(true);
    }
  }, [inView, animPlayed]);

  return (
    <section className="hero position-relative js_hero mt-5 mt-md-7 pt-0">
      <div className="hero__heading js_heading position-absolute text-center w-100 pt-2 pt-sm-2 pt-md-3 pt-lg-4 pt-xl-6">
        <h1 className="hero__heading__h1 mb-0 pt-sm-3 pt-md-0 gs_reveal">Be <span>responsive</span></h1>
        <a href="#introductions" role="button" aria-label="down button" className="hero__down-button js_hero_button mt-5 gs_reveal">&#x2304;</a>
      </div>
      {/* Considered Context API here, but opted for passing props for simplicity - easy to understand and maintain */}
      <Tools toolAnimDetails={toolAnimDetails} />
      <div className="mx-auto position-absolute hero__hashTag text-white text-center d-none d-sm-block">
        #Team
      </div>
      <HeroImages />
    </section>
  );
};

export default Hero;

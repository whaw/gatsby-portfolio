import React, { useState, useEffect, memo } from "react"
import $ from "jquery"

import HeroHeaders from "./HeroHeaders"
import Tools from "./Tools"
import HeroImages from "./HeroImages"

const Hero = memo(({ inView, cssAnimations }) => {
  const [hasAnimPlayed, setAnimPlayed] = useState(false)
  const ANIM_CONTAINER = ".js_hero"
  const HERO_ANIM_DETAILS = require("data/heroAnim")
  const TOOL_ANIM_DETAILS = require("data/toolsAnim")

  useEffect(() => {
    !inView(ANIM_CONTAINER) ? bindEvents() : initiateHeroAnimations()
    return () => $(window).off()
    /* eslint-disable-next-line */
  }, [])

  const bindEvents = () => $(window).on("load resize scroll", () => inView(ANIM_CONTAINER) && initiateHeroAnimations())

  function initiateHeroAnimations() {
    if (!hasAnimPlayed) {
      cssAnimations(HERO_ANIM_DETAILS)
      cssAnimations(TOOL_ANIM_DETAILS)
      setAnimPlayed(true)
    }
  }

  return (
    <section className="hero position-relative js_hero mt-5 mt-md-7 pt-0">
      <HeroHeaders />
      <Tools toolAnimDetails={TOOL_ANIM_DETAILS} />
      <div className="mx-auto position-absolute hero__hashTag text-white text-center d-none d-sm-block">
        #Team
      </div>
      <HeroImages />
    </section>
  )
})

export default Hero

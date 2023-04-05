import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import $ from "jquery"

import Tools from "./Tools/Tools"
const heroAnimDetails = require("/src/data/heroAnim")
const toolAnimDetails = require("/src/data/toolsAnim")
const animContainer = ".js_hero"

const Hero = ({ inView, cssAnimations }) => {
  const [hasAnimPlayed, setAnimPlayed] = useState(false)

  useEffect(() => {
    !inView(animContainer) ? bindEvents() : initiateHeroAnimations()
    return () => $(window).off()
    /* eslint-disable-next-line */
  }, [])

  const bindEvents = () => $(window).on("load resize scroll", () => inView(animContainer) && initiateHeroAnimations())

  function initiateHeroAnimations() {
    if (!hasAnimPlayed) {
      cssAnimations(heroAnimDetails)
      cssAnimations(toolAnimDetails)
      setAnimPlayed(true)
    }
  }

  return (
    <>
      <section className="hero position-relative js_hero mt-7 mt-sm-4 mt-md-8 pt-0">
        <div className="hero__heading js_heading position-absolute text-center w-100 pt-2 pt-sm-4 pt-md-3 pt-lg-4 pt-xl-6">
          <h1 className="hero__heading__h1 mb-0 gs_reveal">Be <span>responsive</span></h1>
          <span className="small d-none d-sm-block text-secondary js_heading hero__sub-heading pb-4  gs_reveal">
            ( + some tools I'm working on, now or soon )
          </span>
          <a href="#introductions" role="button" aria-label="down button" className="hero__down-button js_hero_button gs_reveal">&#x2304;</a>
        </div>
        <Tools toolAnimDetails={toolAnimDetails} />
        <div className="mx-auto position-absolute hero__hashTag text-white text-center d-none d-sm-block">
          #Team
        </div>

        {/* Main images */}
        <StaticImage
          src="../../images/hero-truck.png"
          className="position-absolute hero__truck js_truck d-none d-sm-block"
          alt="truck and tree framing scene"
        />
        <StaticImage
          src="../../images/hero-tree.png"
          className="position-absolute hero__tree js_tree d-none d-sm-block"
          alt="trees framing scene"
        />
        <StaticImage
          src="../../images/hero-sketch.png"
          className="position-absolute hero__sketch js_sketch d-none d-sm-block"
          alt="sketch of a road less traveled"
        />
        <StaticImage
          src="../../images/hero-main2.png"
          className="hero__main mt-8 mt-md-8 d-none d-sm-block"
          alt="media around group on motorcycles"
        />
        {/* mobile ------------- */}
        <StaticImage
          src="../../images/hero-mobile-sketch.png"
          className="position-absolute hero__sketch--mobile js_sketch-mobile mt-8 mt-md-8 d-sm-none gs_reveal gs_reveal_fromRight"
          alt="sketch of the road less traveled"
        />
        <StaticImage
          src="../../images/hero-mobile-rider.png"
          className="hero__rider--mobile mt-8 mt-md-8 d-sm-none gs_reveal gs_reveal_fromLeft"
          alt="lone motorcycle rider"
        />
      </section>
    </>
  )
}

export default Hero

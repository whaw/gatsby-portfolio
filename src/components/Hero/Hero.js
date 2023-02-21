import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Tool from "./Tools/Tool"
import $ from "jquery"

const toolAnimDetails = require("/src/data/toolsAnim")
const heroAnimDetails = require("/src/data/heroAnim")
const animContainer = ".js_hero"

const Hero = ({ inView, animateWithClassSelectors }) => {
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    !inView(animContainer) ? bindEvents() : initiateHeroAnimations()
    return () => cleanupEventListeners()
    // eslint-disable-next-line
  }, [])

  const bindEvents = () => $(window).on("load resize scroll", () => inView(animContainer) && initiateHeroAnimations())
  const cleanupEventListeners = () => $(window).off()

  function initiateHeroAnimations() {
    if (!hasPlayed) {
      animateWithClassSelectors(heroAnimDetails)
      animateWithClassSelectors(toolAnimDetails)
      setHasPlayed(true)
    }
  }

  return (
    <>
      <section className="hero position-relative js_hero mt-5 pt-0">
        <div className="hero__heading js_heading position-absolute text-center w-100 pt-2 pt-sm-6 pt-md-7 pt-xl-11">
          <h1 className="hero__heading__h1 mx-auto mb-0 d-sm-none gs_reveal">
            Aiming to surprise<br /> &amp; delight
          </h1>
          <h1 className="hero__heading__h1 mx-auto mb-0 d-none d-sm-block">
            Aiming to surprise &amp; delight
          </h1>
          <span className="small d-none d-sm-block text-secondary js_heading hero__sub-heading pb-2">
            ( + some tools I'm working on, now or soon )
          </span>
        </div>
        <a href="#introductions" className="hero__button js_hero_button">&#x2304;</a>

        {/* Tool images */}
        {toolAnimDetails[0].images.map((tool) => {
          return (
            <Tool
              selector={tool.selector}
              name={tool.name}
              description={tool.description}
              status={tool.status}
              key={tool.image}
            />
          )
        })}

        {/* Main images */}
        <StaticImage
          src="../../images/hero-truck.png"
          className="position-absolute hero__truck js_truck"
          placeholder="tracedSVG"
          alt="truck and tree"
        />
        <StaticImage
          src="../../images/hero-tree.png"
          className="position-absolute hero__tree js_tree"
          placeholder="tracedSVG"
          alt="the media, trees and benches"
        />
        <StaticImage
          src="../../images/hero-sketch.png"
          className="position-absolute hero__sketch js_sketch"
          placeholder="tracedSVG"
          alt="sketch of a road less traveled"
        />
        <StaticImage
          src="../../images/hero-main2.png"
          className="hero__main mt-8 mt-md-8"
          placeholder="tracedSVG"
          alt="media scene"
        />
        <aside className="hero__aside border-0"><small>Team, outdoors, bikes &#127856; &#127881;</small></aside>
      </section>
    </>
  )
}

export default Hero

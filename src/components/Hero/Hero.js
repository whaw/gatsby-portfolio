import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import AnimController from "./AnimController"
import Tool from "./Tools/Tool"

const toolAnimDetails = require("/src/data/toolsAnim")
const heroAnimDetails = require("/src/data/heroAnim")
const animContainer = ".js_hero"

const Hero = () => {

  return (
    <>
      <AnimController animDetails={heroAnimDetails} animContainer={animContainer} />
      <AnimController animDetails={toolAnimDetails} animContainer={animContainer} />

      <section className="hero position-relative js_hero mt-5 mt-md-8 pt-0">
        <div className="hero__heading js_heading position-absolute text-center w-100 pt-2 pt-sm-4 pt-lg-6 pt-xl-6">
          <h1 className="hero__heading__h1 mx-auto mb-0 d-sm-none">
            Ready...<br />
            <small className="text-secondary">Aiming to exceed expectations</small>
          </h1>
          <h1 className="hero__heading__h1 mx-auto mb-0 d-none d-sm-block">
            Aiming to exceed expectations
          </h1>
          <span className="small d-none d-sm-block text-secondary js_heading hero__sub-heading pb-2">
            ( + some tools I'm working on, now or soon )
          </span>
          <span className="hero__heading__buttons js_hero_buttons">
            <a href="#introductions" className="btn btn-primary btn-sm text-white mr-2"
              role="button">Tell me more</a>
          </span>
        </div>

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
        <div className="mx-auto position-absolute hero__hashTag text-white text-center">
          #Team
        </div>
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
      </section>
    </>
  )
}

export default Hero

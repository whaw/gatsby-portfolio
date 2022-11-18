import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Animation from "./Animation"
import Tool from "./Tools/Tool"

const toolAnimDetails = require("/src/data/toolsAnim")
const heroAnimDetails = require("/src/data/heroAnim")
const animContainer = ".js_hero"

const Hero = () => {

  return (
    <>
      <Animation animDetails={heroAnimDetails} animContainer={animContainer} />
      <Animation animDetails={toolAnimDetails} animContainer={animContainer} />

      <div className="hero position-relative js_hero mt-8">
        <h1 className="hero__h1 js_h1">Ready...</h1>
        <div className="hero__heading js_heading position-absolute text-center w-100 pt-2 pt-sm-4 pt-lg-6 pt-xl-5">
          <h4 className="hero__heading__h4 mx-auto mb-0 d-sm-none">
            Ready...<br />
            <small className="text-secondary">Aiming to exceed expectations</small>
          </h4>
          <h4 className="hero__heading__h4 mx-auto mb-0 d-none d-sm-block">
            Aiming to exceed expectations
          </h4>
          <span className="small d-none d-sm-block text-secondary js_heading hero__sub-heading">
            ( + some tools I'm working on, now or soon )
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
          src="../../images/hero-main2b.png"
          className="hero__main mt-11 mt-sm-12 mt-md-8"
          placeholder="tracedSVG"
          alt="media scene"
        />
        <StaticImage
          src="../../images/riders.png"
          className="hero__riders position-absolute"
          placeholder="tracedSVG"
          alt="riders"
        />
      </div>
    </>
  )
}

export default Hero

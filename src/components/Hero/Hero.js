import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Animation from "../utilities/Animation"
import Tool from "./Tools/Tool"
import toolAnimElements from "/src/data/toolsAnim"
import heroAnimElements from "/src/data/heroAnim"

const animContainer = ".js_hero"

const Hero = () => {
  return (
    <>
      <Animation
        animElements={heroAnimElements}
        animContainer={animContainer}
      />
      <Animation
        animElements={toolAnimElements}
        animContainer={animContainer}
      />

      <div className="hero position-relative js_hero mt-11">
        <div className="heading js_heading position-absolute text-center w-100 pt-md-5">
          <h1 className="h2 mx-auto">Ready to Go</h1>
          <h3 className="mx-auto text-secondary">
            Aiming to exceed expectations
          </h3>
          <span className="small d-none d-sm-block js_heading hero__sub-heading">
            ( + some tools I'm working on, now or soon )
          </span>
        </div>

        {/* Tool images */}
        {toolAnimElements[0].images.map(tool => {
          return (
            <Tool
              selector={tool.selector}
              name={tool.name}
              description={tool.description}
              status={tool.status}
              key={tool.image}
              alt={tool.alt}
            />
          )
        })}

        {/* Main images */}
        <StaticImage
          src="../../images/hero-truck.png"
          className="position-absolute mt-14 hero__truck js_truck"
          placeholder="TRACED_SVG"
          alt="truck and tree"
        />
        <StaticImage
          src="../../images/hero-tree.png"
          className="position-absolute hero__tree js_tree"
          placeholder="TRACED_SVG"
          alt="media, trees and benches"
        />
        <h3 className="mx-auto position-absolute hero__hashTag text-white text-center">
          #Team
        </h3>
        <StaticImage
          src="../../images/hero-sketch.png"
          className="position-absolute hero__sketch js_sketch"
          placeholder="TRACED_SVG"
          alt="sketch of a road less traveled"
        />
        <StaticImage
          src="../../images/hero-main2.png"
          className="hero__main mt-11 mt-sm-12 mt-md-14"
          placeholder="TRACED_SVG"
          alt="media scene"
        />
      </div>
    </>
  )
}

export default Hero

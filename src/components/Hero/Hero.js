import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Animation from "../Animation"
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

      <div className="hero position-relative js_hero mt-13">
        <div className="heading js_heading position-absolute text-center w-100">
          <h1 className="mx-auto">Ready to Go</h1>
          <h2 className="mx-auto text-secondary">
            Aiming to exceed expectations
          </h2>
          <span className="small js_heading hero__sub-heading">
            ( + some tools I'm focused on developing, now or soon )
          </span>
          {/* <div className="pt-3 d-none d-sm-block">
            <a href="#skills" className="btn btn-secondary" role="button">
              Tell me more
            </a>{" "}
            &nbsp;
            <a
              href="assets/downloads/William-Haw-CV.pdf"
              className="btn btn-secondary"
              role="button"
              target="_blank"
            >
              Straight to the Goods (CV)
            </a>
          </div> */}
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
          className="position-absolute hero__truck js_truck"
          layout="fullWidth"
          placeholder="TRACED_SVG"
          alt="truck and tree"
        />
        <StaticImage
          src="../../images/hero-tree.png"
          className="position-absolute hero__tree js_tree"
          layout="fullWidth"
          placeholder="TRACED_SVG"
          alt="media, trees and benches"
        />
        <h3 className="mx-auto position-absolute hero__hashTag text-white text-center">
          #Team
        </h3>
        <StaticImage
          src="../../images/hero-sketch3.png"
          className="position-absolute hero__sketch js_sketch"
          layout="fullWidth"
          placeholder="TRACED_SVG"
          alt="sketch of a road less traveled"
        />
        <StaticImage
          src="../../images/hero-main.png"
          className="hero__main mt-11"
          layout="fullWidth"
          placeholder="TRACED_SVG"
          alt="media scene"
        />
      </div>
    </>
  )
}

export default Hero

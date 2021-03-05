import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Animation from "../Animation"
import Tool from "../Tools/Tool"
import toolAnimElements from "../Tools/toolAnimElements"
import heroAnimElements from "./heroAnimElements"

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
            Aiming for experiences that surprise and delight
          </h2>
          <span className="small">
            ( + some tools I am currently in or plan to develop)
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
        {toolAnimElements[0].elements.map(tool => {
          return (
            <Tool
              filename={tool.filename}
              selector={tool.selector}
              key={tool.filename}
              alt={tool.filename}
              width={tool.width}
              top={tool.top}
              left={tool.left}
            />
          )
        })}

        {/* Main images */}
        <StaticImage
          src="../images/hero-truck.png"
          className="position-absolute hero__truck js_truck"
          layout="FULL_WIDTH"
          placeholder="TRACED_SVG"
          alt="truck and tree"
        />
        <StaticImage
          src="../images/hero-tree.png"
          className="position-absolute hero__tree js_tree"
          layout="FULL_WIDTH"
          placeholder="TRACED_SVG"
          alt="people, trees and benches"
        />
        <StaticImage
          src="../images/hero-tree-2.png"
          className="position-absolute hero__tree-2 js_tree2"
          layout="FULL_WIDTH"
          placeholder="TRACED_SVG"
          alt="brick wall and tree"
        />
        <StaticImage
          src="../images/hero-rider.png"
          className="hero__rider position-absolute"
          layout="FULL_WIDTH"
          placeholder="TRACED_SVG"
          alt="riders on motorcycles"
        />
        <h3 className="mx-auto position-absolute hashTag text-white text-center">
          #Team
        </h3>
        <StaticImage
          src="../images/hero-main.png"
          className="hero__main"
          layout="FULL_WIDTH"
          placeholder="TRACED_SVG"
          alt="media scene"
        />
      </div>
    </>
  )
}

export default Hero

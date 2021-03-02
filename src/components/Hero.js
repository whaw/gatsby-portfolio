import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Animation from "./Animation"

const animElements = [
  { selector: ".js_truck", delay: null, elementDelay: null },
  { selector: ".js_tree2", delay: 400, elementDelay: null },
  { selector: ".js_tree", delay: 800, elementDelay: null },
  { selector: ".js_rider", delay: 1000, elementDelay: null },
]
const animContainer = ".js_hero"

const Hero = () => {
  return (
    <>
      <Animation animElements={animElements} animContainer={animContainer} />
      <div className="hero position-relative js_hero mt-13">
        <div className="heading position-absolute text-center w-100">
          <h1 className="mx-auto">Ready to Go</h1>
          <h2 className="mx-auto text-secondary">
            Focused on experiences that exceed expectations
          </h2>
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
        <StaticImage
          src="../images/hero-truck.png"
          className="position-absolute hero__truck js_truck"
          layout="fullWidth"
          placeholder="TRACED_SVG"
          alt="truck and tree"
        />
        <StaticImage
          src="../images/hero-tree.png"
          className="position-absolute hero__tree js_tree"
          layout="fullWidth"
          placeholder="TRACED_SVG"
          alt="people, trees and benches"
        />
        <StaticImage
          src="../images/hero-tree-2.png"
          className="position-absolute hero__tree-2 js_tree2"
          layout="fullWidth"
          placeholder="TRACED_SVG"
          alt="brick wall and tree"
        />
        <h3 className="mx-auto position-absolute hashTag text-white text-center">
          #Team
        </h3>
        <StaticImage
          src="../images/hero-main.png"
          className="hero__main"
          layout="fullWidth"
          placeholder="TRACED_SVG"
          alt="media scene"
        />
      </div>
    </>
  )
}

export default Hero

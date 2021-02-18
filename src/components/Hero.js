import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Jumbotron from "react-bootstrap/jumbotron"

const Hero = () => (
  <Jumbotron className="hero position-relative js_hero">
    <div className="heading text-center position-absolute w-100">
      <h1>
        <span className="text-white">My</span> sandbox
      </h1>
      <h2 className="text-white">
        to provide a sense of who I am + what I can offer.
        <br />
        <small className="d-none d-lg-block">
          I seek experiences that exceed expectations.
        </small>
      </h2>
      <div className="pt-3 d-none d-sm-block">
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
      </div>
    </div>
    <StaticImage
      src="../images/hero-left-frame.png"
      className="position-absolute hero__left-frame js_frame"
      layout="fullWidth"
      placeholder="TRACED_SVG"
      alt="stone wall"
    />
    <StaticImage
      src="../images/hero-right-frame.png"
      className="position-absolute hero__right-frame js_frame"
      layout="fullWidth"
      placeholder="TRACED_SVG"
      alt="stone wall, trees, man squatting"
    />
    <StaticImage
      src="../images/hero-rider.png"
      className="position-absolute hero__rider js_rider"
      layout="fullWidth"
      placeholder="TRACED_SVG"
      alt="man on motorbike"
    />
    <StaticImage
      src="../images/hero-mountains2.png"
      layout="fullWidth"
      placeholder="TRACED_SVG"
      alt="mountains"
    />
    <div className="pin text-white pin-1 position-absolute js_pin">
      <div className="pin__text position-absolute d-inline text-nowrap">
        <small>Solving problems</small>
      </div>
    </div>
    <div className="pin text-white pin-2 position-absolute js_pin">
      <div className="pin__text position-absolute d-inline text-nowrap">
        <small>Exceeding expectations</small>
      </div>
    </div>
    <div className="pin text-white pin-3 position-absolute js_pin">
      <div className="pin__text position-absolute d-inline text-nowrap">
        <small>Success!</small>
      </div>
    </div>
  </Jumbotron>
)

export default Hero

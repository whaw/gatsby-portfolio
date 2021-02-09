import React from "react"
import mountains from "../images/hero-mountains2.png"
import leftFrame from "../images/hero-left-frame.png"
import rightFrame from "../images/hero-right-frame.png"
import rider from "../images/hero-rider.png"

const Hero = () => (
  <div className="jumbotron hero position-relative js_hero">
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
        >
          Straight to the Goods (CV)
        </a>
      </div>
    </div>
    <img
      src={leftFrame}
      className="position-absolute hero__left-frame img-fluid js_frame"
      alt=""
    />
    <img
      src={rightFrame}
      className="position-absolute hero__right-frame img-fluid js_frame"
      alt=""
    />
    <img
      src={rider}
      className="position-absolute hero__rider img-fluid js_rider"
      alt=""
    />
    <img src={mountains} className="img-fluid" alt="" />
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
  </div>
)

export default Hero

import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const HeroImages = () => {
  return (
    <>
      {/* Main images */}
      <StaticImage
        src="../images/hero-truck.png"
        className="position-absolute hero__truck js_truck d-none d-sm-block"
        alt="truck and tree framing scene"
      />
      <StaticImage
        src="../images/hero-tree.png"
        className="position-absolute hero__tree js_tree d-none d-sm-block"
        alt="trees framing scene"
      />
      <StaticImage
        src="../images/hero-sketch.png"
        className="position-absolute hero__sketch js_sketch d-none d-sm-block"
        alt="sketch of a road less traveled"
      />
      <StaticImage
        src="../images/hero-main2.png"
        className="hero__main mt-8 mt-md-8 d-none d-sm-block"
        alt="media around group on motorcycles"
      />
      {/* mobile ------------- */}
      <StaticImage
        src="../images/hero-mobile-sketch.png"
        className="position-absolute hero__sketch--mobile js_sketch-mobile mt-8 mt-md-8 d-sm-none gs_reveal gs_reveal_fromRight"
        alt="sketch of the road less traveled"
      />
      <StaticImage
        src="../images/hero-mobile-rider.png"
        className="hero__rider--mobile mt-8 mt-md-8 d-sm-none gs_reveal gs_reveal_fromLeft"
        alt="lone motorcycle rider"
      />
    </>
  )
}

export default HeroImages
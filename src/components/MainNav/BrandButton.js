import React from 'react'
import { siteJsUtils } from "../Layout/siteJsUtils"

const BrandButton = () => {
  return (
    <button className="navbar-brand js_logo pb-2 border-0 bg-white text-left p-0" onClick={() => siteJsUtils.scrollHome()}>
      <span className="logo mb-2 d-block">A Working Copy</span>
      <span className="d-none d-md-inline-block">William Haw &mdash; Front-End Developer
        <span className="d-none d-xl-inline-block">, Outdoor Enthusiast</span>
      </span>
    </button>
  )
}

export default BrandButton
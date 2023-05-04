import React from 'react'
import { siteJsUtils } from "../Layout/siteJsUtils"

const BrandButton = () => {
  return (
    <button className="navbar-brand js_logo pb-2 border-0 bg-white text-left p-0" onClick={() => siteJsUtils.scrollHome()}>
      <span className="logo mb-2 d-block">A working copy</span>
      <span className="d-none d-md-inline-block">William Haw &mdash; Front-end developer
        <span className="d-none d-xl-inline-block">, Outdoor enthusiast</span>
      </span>
    </button>
  )
}

export default BrandButton
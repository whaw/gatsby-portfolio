import React from "react"
import MainNavLinks from "./MainNavLinks"
import BrandButton from "./BrandButton"

const MainNav = () => {

  return (
    <nav role="navigation" aria-label="Main" className="navbar navbar-expand-lg container navbar__container navbar-light bg-white justify-content-between fixed-top pt-lg-3">
      <BrandButton />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse flex-grow-0 pb-4 pb-sm-2"
        id="navbarSupportedContent"
      >
        <MainNavLinks />
      </div>
    </nav>
  )
}

export default MainNav
// MainNav 

import React from "react";
import MainNavLinks from "./MainNavLinks";
import scrollToID from "utils/scrollToID";

const MainNav = () => {
  return (
    <nav role="navigation" aria-label="Main nav" className="navbar navbar-expand-lg container navbar__container navbar-light bg-white justify-content-between fixed-top pt-lg-3">
      <button className="navbar-brand js_logo pb-2 border-0 bg-white text-left p-0" onClick={() => scrollToID("home")}>
        <span className="logo d-block">A Working Copy</span>
        <span><strong>William Haw</strong> ~ Front-End Developer
          <span className="d-none d-xl-inline-block">, Outdoor Enthusiast</span>
        </span>
      </button>
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
        <MainNavLinks navID="header__main-nav-links" navClasses="nav navbar-nav mr-auto" />
      </div>
    </nav>
  )
};

export default MainNav;
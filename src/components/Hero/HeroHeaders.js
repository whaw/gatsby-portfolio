import React from 'react'

const HeroHeaders = () => {
  return (
    <div className="hero__heading js_heading position-absolute text-center w-100 pt-2 pt-sm-2 pt-md-3 pt-lg-4 pt-xl-6">
      <h1 className="hero__heading__h1 mb-0 pt-sm-3 pt-md-0 gs_reveal">Be <span>responsive</span></h1>
      <span className="small d-none d-sm-block text-secondary js_heading hero__sub-heading pb-4  gs_reveal">
        ( + some tools I'm working on, now or soon )
      </span>
      <a href="#introductions" role="button" aria-label="down button" className="hero__down-button js_hero_button gs_reveal">&#x2304;</a>
    </div>
  )
}

export default HeroHeaders
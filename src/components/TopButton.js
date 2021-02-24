import React, { useState } from "react"
import $ from "jquery"

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const isVisibleClass = isVisible ? "show" : null

  $(window).on("scroll", function () {
    isVisibleCheck()
  })

  const isVisibleCheck = () => {
    const screenTop = $(window).scrollTop()
    const headerHeight = $(".header").outerHeight()
    screenTop > headerHeight ? setIsVisible(true) : setIsVisible(false)
  }

  return (
    <a
      href="#home"
      className={`btn btn-secondary top-button ${isVisibleClass}`}
    >
      Top
    </a>
  )
}

export default TopButton

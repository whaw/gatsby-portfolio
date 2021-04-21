import React, { useState, useEffect } from "react"
import $ from "jquery"

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const isVisibleClass = isVisible ? "show" : null

  useEffect(() => {
    $(window).on("scroll", function () {
      isVisibleCheck()
    })
  })

  const isVisibleCheck = () => {
    const screenTop = $(window).scrollTop()
    const headerHeight = $(".header").outerHeight()
    if (screenTop && headerHeight) {
      screenTop > headerHeight ? setIsVisible(true) : setIsVisible(false)
    }
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

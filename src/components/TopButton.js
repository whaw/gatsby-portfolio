import React, { useState, useEffect } from "react"
import $ from "jquery"
import { siteJsUtils } from "./Layout/siteJsUtils"

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    $(window).on("scroll resize", function () {
      siteJsUtils.inView(".js_hero") ? setIsVisible(false) : setIsVisible(true)
    })
    return () => window.off()
  }, [])

  return <button
    onClick={() => siteJsUtils.scrollHome()}
    className={`btn btn-secondary top-button ${isVisible && "show"}`}
  > Top</button>
}

export default TopButton

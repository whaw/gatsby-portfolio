import React, { useEffect, useState } from "react"
import $ from "jquery"
import { siteJsUtils } from "js/siteJsUtils"

const TopButton = ({ children }) => {
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      $(window).on("load scroll resize", () => siteJsUtils.inView(".js_hero") ? setShowTopButton(false) : setShowTopButton(true))
    }
    return () => $(window).off()
  }, [])

  return (
    <div className={`top-button ${showTopButton && "show"}`}>
      {children}
    </div>
  )
}

export default TopButton
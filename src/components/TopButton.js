import React, { useEffect, useState } from "react";
import $ from "jquery";
import { jsSiteUtils } from "../assets/js/jsSiteUtils";

const TopButton = ({ children }) => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      $(window).on("load scroll resize", () => jsSiteUtils.inView(".js_hero") ? setShowTopButton(false) : setShowTopButton(true));
    }
    return () => $(window).off();
  }, [])

  return (
    <a className={`top-button ${showTopButton && "show"}`} aria-label="Go to top">
      {children}
    </a>
  )
}

export default TopButton
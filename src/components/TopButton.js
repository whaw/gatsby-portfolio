import React, { useEffect, useState } from "react";
import $ from "jquery";
import { jsSiteUtils } from "../assets/js/jsSiteUtils";

const TopButton = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  const handleClick = () => {
    jsSiteUtils.scrollHome();
  }

  useEffect(() => {
    const onScroll = () => {
      // check if hero is in view and show/hide button
      jsSiteUtils.inView(".js_hero") ? setShowTopButton(false) : setShowTopButton(true);
    }

    if (typeof window !== `undefined`) {
      $(window).on("load scroll resize", onScroll);
    }
    return () => $(window).off("load scroll resize", onScroll);
  }, [])

  return (
    <button onClick={handleClick} className={`top-button btn-secondary ${showTopButton && "show"}`} >Top</button>
  )
}

export default TopButton
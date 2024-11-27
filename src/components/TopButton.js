import React, { useEffect, useState } from "react";
import $ from "jquery";
import { jsSiteUtils } from "../assets/js/jsSiteUtils";

const TopButton = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const onScrollResize = jsSiteUtils.debounce(() => {
      // check if hero is in view and show/hide button
      jsSiteUtils.inView(".js_hero") ? setShowTopButton(false) : setShowTopButton(true);
    }, 100);

    const events = ["scroll", "resize"];
    events.forEach(event => window.addEventListener(event, onScrollResize));

    onScrollResize();

    return () => events.forEach(event => window.removeEventListener("scroll resize", onScrollResize));
  }, [])

  return (
    <button onClick={() => jsSiteUtils.scrollToID("home")} className={`btn top-button btn-secondary ${showTopButton && "show"}`}>Top</button>
  )
}

export default TopButton
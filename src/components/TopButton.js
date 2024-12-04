import React, { useEffect, useState } from "react";
import jsSiteUtils from "assets/js/jsSiteUtils";

const TopButton = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const events = ["scroll", "resize"];

    // if hero is in view show button, else hide
    const onScrollResize = jsSiteUtils.debounce(() => {
      jsSiteUtils.inView(".js_hero") ? setShowTopButton(false) : setShowTopButton(true);
    }, 100);

    events.forEach(event => window.addEventListener(event, onScrollResize));
    onScrollResize();

    return () => events.forEach(eventType => window.removeEventListener(eventType, onScrollResize));
  }, [])

  return (
    <button onClick={() => jsSiteUtils.scrollToID("home")} className={`btn top-button btn-secondary ${showTopButton && "show"}`}>Top</button>
  )
}

export default TopButton
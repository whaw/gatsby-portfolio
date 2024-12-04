import React, { useEffect, useState } from "react";
import jsSiteUtils from "assets/js/jsSiteUtils";
import Button from "components/Button"

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

    return () => events.forEach(event => window.removeEventListener(event, onScrollResize));
  }, [])

  return (
    <Button onClick={() => jsSiteUtils.scrollToID("home")} classes={`top-button btn-secondary ${showTopButton && "show"}`}>Top</Button>
  )
}

export default TopButton
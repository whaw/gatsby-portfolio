import React, { useEffect, useState } from "react";
import jsSiteUtils from "assets/js/jsSiteUtils";
import useInView from "hooks/useInView";
import Button from "components/Button"

const TopButton = () => {
  const [showTopButton, setShowTopButton] = useState(false);
  const inView = useInView(".js_hero");

  useEffect(() => {
    setShowTopButton(!inView);
  }, [inView])

  return (
    <Button onClick={() => jsSiteUtils.scrollToID("home")} classes={`top-button btn-secondary ${showTopButton && "show"}`}>Top</Button>
  )
}

export default TopButton
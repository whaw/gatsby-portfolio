import React, { useEffect, useState } from "react";
import useInView from "hooks/useInView";
import scrollToID from "utils/scrollToID";
import Button from "components/Button"

const TopButton = () => {
  const [showTopButton, setShowTopButton] = useState(false);
  const inView = useInView(".js_hero");

  useEffect(() => {
    setShowTopButton(!inView);
  }, [inView])

  return (
    <Button onClick={() => scrollToID("home")} className={`top-button btn-secondary ${showTopButton && "show"}`}>Top</Button>
  )
}

export default TopButton
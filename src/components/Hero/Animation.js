import $ from "jquery"
import React, { useState, useEffect } from "react"

const Animation = ({ animDetails, animContainer }) => {
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    if (!inView(animContainer) && hasPlayed === false) {
      // add scroll, to check if hero is in view
      bindEvents()
      return
    }
    if (hasPlayed === false && inView(animContainer)) {
      render()
      return
    }
    return () => {
      $(window).off()
    }
  })

  const bindEvents = () => {
    $(window).on("load resize scroll", e => {
      if (inView(animContainer)) render()
    })
  }

  const inView = (el) => {
    const halfElementHeight = $(el).height() * .5
    const scrollPos = $(window).scrollTop()
    if (scrollPos < halfElementHeight) return true
  }

  const render = () => {
    setHasPlayed(true)
    animDetails.forEach((animElement) => {
      const elementArray = $(animElement.selector).toArray()
      const delay = animElement.delay
      const elementDelay = animElement.elementDelay

      if (delay !== null) {
        setTimeout(() => {
          animate(elementArray, elementDelay)
        }, delay)
      } else {
        animate(elementArray, elementDelay)
      }
    })
  }

  const animate = (elementArray, elementDelay) => {
    elementArray.forEach((el, i) => {
      if (elementDelay !== null) {
        setTimeout(function () {
          $(el).addClass("animate")
        }, i * elementDelay)
      } else {
        $(el).addClass("animate")
      }
    })
  }

  return <></>
}

export default Animation

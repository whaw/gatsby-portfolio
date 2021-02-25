import $ from "jquery"
import React, { useState, useEffect } from "react"

const Animation = ({ animElements, animContainer }) => {
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    if (hasPlayed === false) {
      bindEvents()
    }
  })

  const bindEvents = () => {
    $(window).on("DOMContentLoaded load resize scroll", e =>
      isElementInViewport(animContainer)
    )
  }

  const isElementInViewport = el => {
    const screenTop = $(window).scrollTop()
    const elementTop = $(el).offset().top
    const screenBottom = screenTop + $(window).innerHeight()
    const elementHeight = $(el).outerHeight()
    const threeQuartersHeight = elementTop + elementHeight * 0.75
    if (screenBottom > threeQuartersHeight && screenTop < elementTop) {
      render()
    }
  }

  const render = () => {
    // go through each anim element
    animElements.forEach(animElement => {
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
    setHasPlayed(true)
  }

  const animate = (elementArray, elementDelay) => {
    console.log(`elementArray ${elementArray}`)
    console.log(`elementDelay ${elementDelay}`)
    elementArray.forEach((el, i) => {
      if (elementDelay !== null) {
        setTimeout(function () {
          $(el).addClass("animate")
        }, i * elementDelay)
      } else {
        $(el).addClass("animate")
      }
    })
    return
  }

  return <></>
}

export default Animation

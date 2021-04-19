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
    $(window).on("load resize scroll", e => {
      if (inView(animContainer)) render()
    })
  }

  const inView = el => {
    const screenTop = $(window).scrollTop()
    const elementTop = $(el).offset().top
    const elementBottom = $(el).offset().bottom
    const screenBottom = screenTop + $(window).innerHeight()
    const elementHeight = $(el).outerHeight()
    const halfHeight = elementTop + elementHeight * 0.5
    if (
      (screenBottom > halfHeight && screenTop < elementTop) ||
      (screenTop > elementTop + halfHeight && screenBottom > elementBottom)
    ) {
      return true
    }
  }

  const render = () => {
    // aray 1: animation information (selector, delay, elementDelay)
    animElements.forEach(animElement => {
      // array 2: elements with same selector/class
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

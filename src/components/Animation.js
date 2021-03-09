import $ from "jquery"
import React, { useState, useEffect } from "react"

const Animation = ({ animElements, animContainer }) => {
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    if (hasPlayed === false) {
      const inView = isElementInViewport(animContainer)
      if (!inView) bindEvents()
    }
  })

  const bindEvents = () => {
    $(window).on("load resize scroll", e => isElementInViewport(animContainer))
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
    // there are two types of arrays used here
    // array type 1: animation information (selector, delay, elementDelay)
    // array type 2: array of elements with same selector/class

    // aray type 1
    animElements.forEach(animElement => {
      // array type 2
      const elementArray = $(animElement.selector).toArray()

      // value to delay initial animation
      const delay = animElement.delay

      // value to delay animation between common elements
      const elementDelay = animElement.elementDelay

      // delay initial animation
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
    // iterate through collection of elements with shared class
    elementArray.forEach((el, i) => {
      // delay between common elements
      if (elementDelay !== null) {
        setTimeout(function () {
          $(el).addClass("animate")
        }, i * elementDelay)
      } else {
        $(el).addClass("animate")
      }
      // $(document).trigger(`${el.selector}_animClassAdded`)
      // console.log(`${el.selector}_animClassAdded`)
    })
  }

  return <></>
}

export default Animation

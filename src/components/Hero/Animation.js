import $ from "jquery"
import React, { useState, useEffect } from "react"

const Animation = ({ animDetails, animContainer }) => {
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    if (!inView(animContainer) && !hasPlayed) {
      bindEvents()
      return
    }
    if (!hasPlayed && inView(animContainer)) {
      render()
      return
    }
    return () => $(window).off()
  })

  const bindEvents = () => $(window).on("load resize scroll", () => inView(animContainer) && render())

  const inView = el => {
    const halfElementHeight = $(el).height() * .5
    const scrollPos = $(window).scrollTop()
    if (scrollPos < halfElementHeight) return true
  }

  const render = () => {
    setHasPlayed(true)
    animDetails.forEach(({ selector, delay, elementDelay }) => {
      const elementArray = $(selector).toArray()

      if (delay !== null) {
        setTimeout(() => {
          animate(elementArray, elementDelay)
        }, delay)
      } else {
        animate(elementArray, elementDelay)
      }
    })
  }

  const animate = (elementArray, elementDelay = null) => {
    elementArray.forEach((el, i) => {
      // not "", null or undefined
      if (!!elementDelay) {
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

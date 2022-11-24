import $ from "jquery"
import React, { useState, useEffect } from "react"

const Animation = ({ animDetails, animContainer }) => {
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    !inView(animContainer) ? bindEvents() : render()
  }, [])

  const bindEvents = () => $(window).on("load resize scroll", () => inView(animContainer) && render())

  const inView = el => {
    const halfElementHeight = $(el).height() * .5
    const scrollPos = $(window).scrollTop()
    if (scrollPos < halfElementHeight) return true
  }

  const render = () => {
    if (!hasPlayed) {
      setHasPlayed(true)
      animDetails.forEach(({ selector, delay, elementDelay }) => {
        const elementArray = $(selector).toArray()

        // not "", null or undefined
        if (!!delay) {
          setTimeout(() => {
            animate(elementArray, elementDelay)
          }, delay)
        } else {
          animate(elementArray, elementDelay)
        }
      })
      // unbind scroll event listener
      $(window).off()
    }
  }

  const animate = (elementArray, elementDelay = null) => {
    elementArray.forEach((el, i) => {
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

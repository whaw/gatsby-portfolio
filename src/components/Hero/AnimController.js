import $ from "jquery"
import React, { useState, useEffect } from "react"

const AnimController = ({ animDetails, animContainer }) => {
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    !inView(animContainer) ? bindEvents() : initAnimation()
    return () => cleanupEventListeners()
    // eslint-disable-next-line
  }, [])

  const bindEvents = () => $(window).on("load resize scroll", () => inView(animContainer) && initAnimation())
  const cleanupEventListeners = () => $(window).off()

  function inView(el) {
    const scrollPos = $(window).scrollTop()
    const elementTop = $(el).offset().top
    const elementBottom = $(el).offset().top
    if (el === '.js_hero' && scrollPos === 0) return true
    if (scrollPos > elementTop && scrollPos < elementBottom) return true
    return false
  }

  function initAnimation() {
    if (!hasPlayed) {
      cleanupEventListeners()
      setHasPlayed(true)

      // initiate main set of animations
      for (const { selector, delay, elementDelay = null } of animDetails) {
        const elementsToAnimate = $(selector).toArray()

        // handle delay
        !!delay ?
          setTimeout(() => {
            animate(elementsToAnimate, elementDelay)
          }, delay)
          :
          animate(elementsToAnimate, elementDelay)
      }
    }
  }

  function animate(elementsToAnimate, elementDelay) {
    elementsToAnimate.forEach((el, i) => {
      const hasChildren = !!elementDelay ? true : false

      // if subset of anims
      // handle delay
      hasChildren ?
        setTimeout(function () {
          $(el).addClass("animate")
        }, i * elementDelay)
        :
        $(el).addClass("animate")
    })
  }
  return <></>
}

export default AnimController

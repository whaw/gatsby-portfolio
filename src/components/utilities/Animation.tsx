import $ from "jquery"
import React, { useState, useEffect } from "react"

interface Props {
  animDetails: Array<any>
  animContainer: string
}

const Animation = ({ animDetails, animContainer }: Props) => {
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    if (hasPlayed === false) bindEvents()
    return () => {
      $(window).off()
    }
  })

  const bindEvents = () => {
    $(window).on("load resize scroll", e => {
      if (inView(animContainer)) render()
    })
  }

  const inView = (el: string) => {
    const element = $(el)
    const screenTop = $(window).scrollTop()
    const windowHeight = $(window).innerHeight()
    const elementOffset = element.offset()
    const elementHeight = element.outerHeight()
    /* typescript doesn't like the object methods. might not be in d.ts file (thus the multiple ifs) */
    if (
      element !== undefined &&
      screenTop !== undefined &&
      windowHeight !== undefined &&
      elementOffset !== undefined &&
      elementHeight !== undefined
    ) {
      const elementTop = elementOffset.top
      const elementBottom = elementTop + elementHeight
      const screenBottom = screenTop + windowHeight
      const halfHeight = elementTop + elementHeight * 0.5
      if (
        (screenBottom > halfHeight && screenTop < elementTop) ||
        (screenTop > elementTop + halfHeight && screenBottom > elementBottom)
      ) {
        return true
      }
    }
  }

  const render = () => {
    // array 1 data structure: [selector, delay, elementDelay]
    animDetails.forEach((animElement: any) => {
      // array 2 is made up of elememts with the same selector
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

  const animate = (elementArray: Array<any>, elementDelay: number) => {
    elementArray.forEach((el: any, i: number) => {
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

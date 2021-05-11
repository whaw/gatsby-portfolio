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
    const elementOffset = element.offset()
    // Todo: check jquery d.ts file for methods
    if (element !== undefined && elementOffset !== undefined) {
      const screenTop = $(window).scrollTop() || 0
      const windowHeight = $(window).innerHeight() || 0
      const elementHeight = element.outerHeight() || 0
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
    animDetails.forEach((animElement: any) => {
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

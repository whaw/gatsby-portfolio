import $ from "jquery"

export function cssAnimations(animDetails) {
  // initiate animations
  for (const { selector, delay, elementDelay = null } of animDetails) {
    const elementsToAnimate = $(selector).toArray()

    // add delay before animation
    !!delay ?
      setTimeout(() => {
        animate(elementsToAnimate, elementDelay)
      }, delay)
      :
      animate(elementsToAnimate, elementDelay)
  }

  function animate(elementsToAnimate, elementDelay) {
    elementsToAnimate.forEach((el, i) => {
      const isGroup = !!elementDelay ? true : false

      // add delay for group animations, between elements
      isGroup ?
        setTimeout(function () {
          $(el).addClass("animate")
        }, i * elementDelay)
        :
        $(el).addClass("animate")
    })
  }
}

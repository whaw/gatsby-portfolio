
import $ from "jquery"

export function cssAnimations(animDetails) {

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

  function animate(elementsToAnimate, elementDelay) {
    elementsToAnimate.forEach((el, i) => {
      const isGroup = !!elementDelay ? true : false

      // handle delay if group of elements
      isGroup ?
        setTimeout(function () {
          $(el).addClass("animate")
        }, i * elementDelay)
        :
        $(el).addClass("animate")
    })
  }
}

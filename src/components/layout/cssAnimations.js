import $ from "jquery"

export function cssAnimations(animDetails) {
  /* initiate animations */
  for (const { selector, delay, elementDelay = null } of animDetails) {
    const elementsToAnimate = $(selector).toArray()

    /* if there is a delay, add it before the animation */
    !!delay ?
      setTimeout(() => {
        animate(elementsToAnimate, elementDelay)
      }, delay)
      :
      animate(elementsToAnimate, elementDelay)
  }
}

function animate(elementsToAnimate, elementDelay) {
  elementsToAnimate.forEach((el, i) => {
    const isGroup = elementDelay !== null ? true : false

    /* if this is a group of eleemnts, add the delay between element animations */
    isGroup ?
      setTimeout(function () {
        $(el).addClass("animate")
      }, i * elementDelay)
      :
      $(el).addClass("animate")
  })
}

import $ from "jquery"

export const cssAnimations = animDetails => {
  function handleDelay(animDetails) {
    for (const { selector, delay = null, groupElementDelay = null } of animDetails) {
      /* Grab all the elments that match the selector –
      could be one or a group. */
      const elements = $(selector).toArray()

      delay !== null ?
        setTimeout(() => {
          handleGroupDelay(elements, groupElementDelay)
        }, delay) /* add delay before animation */
        :
        handleGroupDelay(elements, groupElementDelay)
    }
  }
  function handleGroupDelay(elements, groupElementDelay) {
    elements.forEach((el, i) => {
      const isGroup = groupElementDelay !== null ? true : false

      isGroup ?
        setTimeout(function () {
          animate(el)
        }, i * groupElementDelay) /* add delay between elements */
        :
        animate(el)
    })
  }
  const animate = (el) => $(el).addClass("animate")
  handleDelay(animDetails)
}
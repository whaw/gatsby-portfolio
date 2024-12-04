const cssAnimations = animDetails => {

  const animate = (el) => el.classList.add("animate");

   /* add delay before animation */
   function delayBeforeAnimation(animDetails) {
    animDetails.forEach(({ selector, delay = null, groupElementDelay = null }) => {

      /* Grab all the elments that match the selector – could be one or a group. */
      const elements = document.querySelectorAll(selector);

      if (elements.length) {
        const animationAction = delayBetweenGroupElements(elements, groupElementDelay);
        delay ? setTimeout(animationAction, delay) : animationAction();
      }
    });
  }

  // add delay between elements in a group
  function delayBetweenGroupElements(elements, groupElementDelay) {
    elements.forEach((el, i) => {
      if (groupElementDelay) {
        setTimeout(() => animate(el), i * groupElementDelay); // delay between elements
      } else {
        animate(el); // no delay
      }
    });
  }

  delayBeforeAnimation(animDetails);
}

export default cssAnimations;
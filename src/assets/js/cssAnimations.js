const cssAnimations = animDetails => {

  const animate = (el) => el.classList.add("animate");

   /* add delay before animation */
   function handleDelay(animDetails) {
    animDetails.forEach(({ selector, delay = null, groupElementDelay = null }) => {

      /* Grab all the elments that match the selector – could be one or a group. */
      const elements = document.querySelectorAll(selector);

      if (elements.length) {
        const animationAction = handleGroupDelay(elements, groupElementDelay);
        delay ? setTimeout(animationAction, delay) : animationAction();
      }
    });
  }

  // add delay between elements in a group
  function handleGroupDelay(elements, groupElementDelay) {
    elements.forEach((el, i) => {
      if (groupElementDelay) {
        setTimeout(() => animate(el), i * groupElementDelay); // delay between elements
      } else {
        animate(el); // no delay, not a group
      }
    });
  }

  handleDelay(animDetails);
}

export default cssAnimations;
const cssAnimations = (animDetails) => {
  const animate = (el) => el.classList.add("animate");

  // add delay before animation
  function handleDelay(animDetails) {
    animDetails.forEach(({ selector, delay = 0, groupElementDelay = 0 }) => {
      const elements = document.querySelectorAll(selector);

      if (elements.length) {
        if (delay) {
          setTimeout(() => handleGroupDelay(elements, groupElementDelay), delay);
        } else {
          handleGroupDelay(elements, groupElementDelay);
        }
      }
    });
  }

  // add delay between elements in a group
  function handleGroupDelay(elements, groupElementDelay) {
    elements.forEach((el, i) => {
      if (groupElementDelay) {
        setTimeout(() => animate(el), i * groupElementDelay);
      } else {
        animate(el);
      }
    });
  }

  handleDelay(animDetails);
};

export default cssAnimations;
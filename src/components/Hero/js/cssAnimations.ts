type AnimationProps = {
  selector: string,
  delay?: number,
  groupElementDelay?: number,
}

const cssAnimations = (animDetails: AnimationProps[]) => {
  const animate = (el: HTMLElement) => el.classList.add("animate");

  // add delay before animation
  const handleDelay = (animDetails: AnimationProps[]) => {
    animDetails.forEach(({ selector = "", delay = 0, groupElementDelay = 0 }) => {
      const elements: NodeListOf<HTMLElement> = document.querySelectorAll(selector);

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
  const handleGroupDelay = (elements: NodeListOf<HTMLElement>, groupElementDelay: number) => {
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
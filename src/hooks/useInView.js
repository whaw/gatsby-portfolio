import {useEffect, useState} from "react";
import useDebounce from "./useDebounce";

const useInView = (selector, offset = 100, debounceDelay = 100) => {
  const [inView, setInView] = useState(false);

  const handleScrollResize = useDebounce(() => {
    const element = document.querySelector(selector);
    if (!element) return setInView(false);

    const scrollPos = window.scrollY + offset;
    const elementTop = element.offsetTop;
    const elementBottom = elementTop + element.offsetHeight;
    setInView(scrollPos > elementTop && scrollPos < elementBottom);
  }, debounceDelay);

  useEffect(() => {
    handleScrollResize()

    const events = ["scroll", "resize"];
    events.forEach(event => window.addEventListener(event, handleScrollResize));

    return () => events.forEach(event => window.removeEventListener(event, handleScrollResize));
  }, [selector, handleScrollResize])

  return inView;
}

export default useInView;

export const jsSiteUtils = {
  scrollToID: (target) => {
    window.location.hash = `#${target}`;
    jsSiteUtils.cleanUrl();
  },
  cleanUrl: () => {
    // Remove the # and everything after
    const url = window.location.href.toString();
    if (url.indexOf("#") > 0) {
      const newUrl = url.slice(0, url.indexOf("#"));
      window.history.replaceState({}, document.title, newUrl);
    }
  },
  inView: (section) => {
    // check if section is in view
    const element = document.querySelector(section);
    if (!element) return false;

    const scrollPos = window.scrollY + 100;
    const elementTop = element.offsetTop;
    const elementBottom = elementTop + element.offsetHeight;
    return scrollPos > elementTop && scrollPos < elementBottom;
  },
  debounce: (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay)
    }
  },
};

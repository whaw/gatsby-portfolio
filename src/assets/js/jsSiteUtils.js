import $ from "jquery";

// Direct export of the utility functions
export const jsSiteUtils = {
  scrollHome: () => {
    window.location.hash = "#home";
    this.cleanUrl();
  },

  cleanUrl: () => {
    /* Remove the # and everything after in the url */
    const url = window.location.href.toString();
    if (url.indexOf("#") > 0) {
      const newUrl = url.slice(0, url.indexOf("#"));
      window.history.replaceState({}, document.title, newUrl);
    }
  },

  inView: (section) => {
    const scrollPos = $(window).scrollTop() + 100;
    const elementTop = $(section).offset().top;
    const elementBottom = elementTop + $(section).height();
    return scrollPos > elementTop && scrollPos < elementBottom;
  }
};

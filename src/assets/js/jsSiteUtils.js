import $ from "jquery"

export const jsSiteUtils = (function () {
  const scrollHome = function () {
    window.location.hash = "#home"
    cleanUrl()
  }
  const cleanUrl = function () {
    /* Remove the # and everything after in the url */
    const url = window.location.href.toString();

    if (url.indexOf("#") > 0) {
      const newUrl = url.slice(0, url.indexOf("#"));
      window.history.replaceState({}, document.title, newUrl);
    }
  }
  const inView = function (section) {
    const scrollPos = $(window).scrollTop() + 100
    const elementTop = $(section).offset().top
    const elementBottom = elementTop + $(section).height()
    if (scrollPos > elementTop && scrollPos < elementBottom) return true
    return false
  }
  return {
    scrollHome,
    inView
  }
})()


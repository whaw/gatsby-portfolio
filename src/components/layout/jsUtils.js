import $ from "jquery"

export const jsUtils = (function () {
  const scrollHome = function () {
    $(window).scrollTop(0, 0)
    cleanUrl()
  }
  const cleanUrl = function () {
    /* Remove everything after root url */
    const url = $(window).attr("location").toString();

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


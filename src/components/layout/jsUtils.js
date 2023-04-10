import $ from "jquery"

export const jsUtils = (function () {
  const scrollHome = function () {
    $(window).scrollTop(0, 0)

    // cleanup url of previous requests
    var uri = $(window).attr("location").toString();

    if (uri.indexOf("#") > 0) {
      var clean_uri = uri.slice(0, uri.indexOf("#"));
      window.history.replaceState({}, document.title, clean_uri);
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
    scrollHome: scrollHome,
    inView: inView
  }
})()


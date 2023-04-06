import $ from "jquery"

export function scrollHome() {
  $(window).scrollTop(0, 0)

  /* cleanup url from previous requests */
  var uri = $(window).attr("location").toString()

  if (uri.indexOf("#") > 0) {
    var clean_uri = uri.slice(0, uri.indexOf("#"))
    window.history.replaceState({}, document.title, clean_uri)
  }
}

export function inView(section) {
  const scrollPos = $(window).scrollTop() + 100
  const elementTop = $(section).offset().top
  const elementBottom = elementTop + $(section).height()
  if (scrollPos > elementTop && scrollPos < elementBottom) return true
  return false
}
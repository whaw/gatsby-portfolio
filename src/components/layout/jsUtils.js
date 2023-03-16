import $ from "jquery"

export function scrollHome() {
  // go to top of page
  window.scrollTo(0, 0)
  var uri = window.location.toString();

  // cleanup url from previous requests
  if (uri.indexOf("#") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("#"));
    window.history.replaceState({}, document.title, clean_uri);
  }
}

export function inView(section) {
  const scrollPos = $(window).scrollTop() + 100
  const elementTop = $(section).offset().top
  const elementBottom = elementTop + $(section).height()
  if (scrollPos > elementTop && scrollPos < elementBottom) return true
  return false
}
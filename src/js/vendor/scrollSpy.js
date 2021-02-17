function updateScrollSpy() {
  $('[data-spy="scroll"]').each(() => {
    var $spy = $(this).scrollspy("refresh")
  })
}

$(function () {
  // reset scrollspy on page load/refresh
  setTimeout(updateScrollSpy, 1000)
  console.log("scrollspy")

  // adjust scrollspy nav highlighting
  $("body").scrollspy({
    offset: 50,
  })
})

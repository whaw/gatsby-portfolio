import $ from "jquery"

const topButton = {
  $topButton: $(".top-btn"),
  $hero: $("header"),

  showButton() {
    let screenTop = $(window).scrollTop()
    let heroHeight = this.$hero.outerHeight()
    screenTop > heroHeight ? this.render(true) : this.render(false)
  },
  render(showButton) {
    showButton
      ? this.$topButton.addClass("show")
      : this.$topButton.removeClass("show")
  },
}

$(function () {
  topButton.showButton()

  $(window).on("scroll", function () {
    topButton.showButton()
  })
})

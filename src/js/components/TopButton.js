import $ from "jquery"

const TopButton = {
  showButton() {
    const $header = $(".header")
    let screenTop = $(window).scrollTop()
    let headerHeight = $header.outerHeight()
    screenTop > headerHeight ? this.render(true) : this.render(false)
  },
  render(showButton) {
    const $topButton = $(".top-btn")
    showButton ? $topButton.addClass("show") : $topButton.removeClass("show")
  },
}

export default TopButton

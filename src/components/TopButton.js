import React from "react"
// import $ from "jquery"

const TopButton = () => {
  // const $topButton = $(".top-btn")
  // $(window).on("scroll", function () {
  //   showButton()
  // })

  // function showButton() {
  //   let screenTop = $(window).scrollTop()
  //   let headerHeight = $(".header").outerHeight()
  //   screenTop > headerHeight ? this.render(true) : this.render(false)
  // }
  // showButton ? $topButton.addClass("show") : $topButton.removeClass("show")

  return (
    <a href="#home" className="btn btn-secondary top-btn">
      Top
    </a>
  )
}

export default TopButton

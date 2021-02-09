import $ from "jquery"
import HeroAnim from "/src/js/modules/Hero"
import SkillsAnim from "/src/js/modules/Skills"

$(function () {
  // links
  // add smooth scroll
  $("a").on("click", function () {
    const id = $(this).attr("href")

    $("html, body").animate(
      {
        scrollTop: $(id).offset().top,
      },
      "slow"
    )
  })

  // animations
  HeroAnim.init()
  SkillsAnim.init()
})

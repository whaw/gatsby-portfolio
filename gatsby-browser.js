import $ from "jquery"
import HeroAnim from "/src/js/modules/Hero"
import SkillsAnim from "/src/js/modules/Skills"

export const onInitialClientRender = () => {
  $(function () {
    // links - add smooth scroll
    $("a").on("click", function () {
      const id = $(this).attr("href")

      $("html, body").animate(
        {
          scrollTop: $(id).offset().top,
        },
        "slow"
      )
    })

    // init animations
    HeroAnim.init()
    SkillsAnim.init()
  })
}

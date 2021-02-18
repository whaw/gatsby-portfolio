import "/src/scss/styles.scss"
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import $ from "jquery"

import HeroAnim from "/src/js/modules/Hero"
import SkillsAnim from "/src/js/modules/Skills"

export const onInitialClientRender = () => {
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

    // init animation
    HeroAnim.init()
    SkillsAnim.init()
  })
}

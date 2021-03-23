import $ from "jquery"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "/src/scss/styles.scss"

export const onInitialClientRender = () => {
  $(function () {
    // links - add smooth scroll
    $("a")
      .not(".cd-horizontal-timeline a")
      .on("click", function () {
        const id = $(this).attr("href")
        let offsetTop = $(id).offset().top

        if (id === "#home") offsetTop = 0

        $("html, body").animate(
          {
            scrollTop: offsetTop,
          },
          "slow"
        )
      })
  })
}

import $ from "jquery"
// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "/src/scss/styles.scss"

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
  })
}

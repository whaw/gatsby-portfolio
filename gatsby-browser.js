import 'jquery/dist/jquery.slim.min.js'
import '@popperjs/core/dist/umd/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import $ from "jquery"

export const onInitialClientRender = () => {
  $(function () {
    // links - add smooth scroll
    $("a")
      .on("click", function () {
        const id = $(this).attr("href")
        let offsetTop = $(id).offset().top

        if (id === "#home") offsetTop = 0
        $("html, body").animate({ scrollTop: offsetTop }, "slow")

      })
  })
}

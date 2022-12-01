import 'jquery/dist/jquery.slim.min.js'
import '@popperjs/core/dist/umd/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import $ from "jquery"

export const onInitialClientRender = () => {
  $(function () {
    // add smooth scroll to links
    // (css option is too fast in safari)
    $("a")
      .on("click", function () {
        const id = $(this).attr("href")
        const offsetTop = $(id).offset().top
        $("html, body").animate({ scrollTop: offsetTop }, "slow")
      })
  })
}

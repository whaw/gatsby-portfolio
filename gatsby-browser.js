import $ from "jquery"

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

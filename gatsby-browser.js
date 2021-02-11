import "/src/scss/styles.scss"
import "/src/js/scripts.js"

// jquery test
import $ from "jquery"
export const onInitialClientRender = () => {
  $(function () {
    console.log("jquery gtg")
  })
}

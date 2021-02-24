import $ from "jquery"

const Anim = {
  hasPlayed: false,
  animElements: [],
  animContainer: "",
  create: function (values) {
    var instance = Object.create(this)
    Object.keys(values).forEach(key => {
      instance[key] = values[key]
    })
    return instance
  },
  init: function () {
    if (this.hasPlayed === false) {
      this.addAnimElements()
      this.bindEvents()
      this.inViewport(this.animContainer)
    }
  },
  addAnimElements: function () {
    this.animElements.forEach(el => {
      var prop = this.convertName(el)
      this.cacheDom(prop, el)
    })
  },
  convertName: function (el) {
    return "$" + el.replace("js_", "")
  },
  cacheDom: function (prop, el) {
    this[prop] = $.makeArray($("." + el))
  },
  bindEvents: function () {
    $(window).on("scroll load", e => this.inViewport(this.animContainer))
  },
  inViewport: function (el) {
    const element = $(el)

    if (element.length > 0) {
      const offsetTop = element.offset().top
      const bottomOfElement = offsetTop + element.outerHeight()
      const bottomOfScreen = $(window).scrollTop() + $(window).innerHeight()
      const topOfScreen = $(window).scrollTop()

      if (bottomOfScreen > offsetTop && topOfScreen < bottomOfElement) {
        this.render()
        this.hasPlayed = true
      }
    }
  },
  render: function () {
    // handle animation timing in children (for now)
    // to leave room for more complex animations
  },
  animate: function (arr, animType = "none") {
    // update 'animate' to be a router to needed animation style
    arr.forEach((el, i) => {
      // break this out into staggered function and
      // addClass function
      if (animType === "staggered") {
        setTimeout(function () {
          $(el).addClass("animate")
        }, i * 300)
      } else {
        $(el).addClass("animate")
      }
    })
  },
}

export default Anim

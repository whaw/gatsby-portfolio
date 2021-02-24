import Anim from "/src/js/modules/Anim"

// Left unpacked here to allow for more flexibility as aniamations are works in progress.
// May refactor Anim.js later to not need this.

let hasPlayed = false

const HeroAnim = Anim.create({
  animElements: ["js_frame", "js_rider", "js_pin", "js_logo", "js_hero"],
  animContainer: ".js_hero",
  render: function () {
    if (hasPlayed === false) {
      this.animate(this.$hero)
      this.animate(this.$frame)
      this.animate(this.$rider)
      setTimeout(() => {
        this.animate(this.$pin, "staggered")
      }, 4000)
      this.animate(this.$logo)
      hasPlayed = true
    }
  },
})

export default HeroAnim

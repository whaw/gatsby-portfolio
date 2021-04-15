import React from "react"
import Brands from "./Brands"
import Timeline from "./Timeline/Timeline"

const Experience = () => (
  <section id="experience" className="bg-light section--with-background">
    <div className="container section__header">
      <div className="row">
        <div className="col text-center">
          <h2>Experience</h2>
          <h3 className="text-secondary">Highlights</h3>
        </div>
      </div>
    </div>
    <Timeline />
    <Brands />
  </section>
)

export default Experience

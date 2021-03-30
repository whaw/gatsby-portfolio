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
    <p className="text-center">
      <a
        href="https://github.com/whaw/whaw.github.io/tree/source"
        className="btn btn-primary border"
        role="button"
        target="_blank"
        rel="noreferrer"
      >
        To this site's code
      </a>
    </p>
    <Brands />
  </section>
)

export default Experience

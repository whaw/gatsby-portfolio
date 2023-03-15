import React from "react"
import Timeline2 from "./Timeline2"
import Section from "../Section"

const Experience = () => (
  <Section sectionId="experience" header="Experience" subHeader="At a glance" sectionClass="bg-light section--with-background">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Timeline2 />
        </div>
      </div>
    </div>
  </Section>
)

export default Experience

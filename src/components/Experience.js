import React, { memo } from "react"
import Timeline from "./Timeline"
import SectionHeader from "./SectionHeader"
// import Stats from "./Stats"

const Experience = memo(() => (
  <section id="experience" className="bg-light section--with-background">
    <SectionHeader header="Experience" subHeader="At a glance" />
    {/* <Stats /> */}
    <Timeline />
  </section>
))

export default Experience

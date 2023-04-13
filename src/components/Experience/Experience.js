import React, { memo } from "react"
import Timeline from "./Timeline"
import SectionHeader from "../layout/SectionHeader"

const Experience = memo(() => (
  <section id="experience" className="bg-light section--with-background">
    <SectionHeader header="Experience" subHeader="At a glance" />
    <Timeline />
  </section>
))

export default Experience

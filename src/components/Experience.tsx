import React from "react";
import Timeline from "./Timeline";
import SectionHeader from "./SectionHeader";

const Experience = () => (
  <section id="experience" className="bg-light section--with-background">
    <SectionHeader header="Experience" subHeader="At a glance" />
    <Timeline />
  </section>
);

export default Experience;

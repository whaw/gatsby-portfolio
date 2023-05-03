import React from "react"
import SectionHeader from "./layout/SectionHeader"

const Contact = () => (
  <section id="contact">
    <SectionHeader header="Give me a&nbsp;shout" subHeader="I'm up for anything!" />
    <div className="container">
      <div className="row">
        <div className="col-12 pt-md-10 pb-5 pb-md-10 text-center gs_reveal">
          <p className="small text-secondary">Contact information has been provided as part of application&nbsp;submissions. Sorry spammers!</p>
        </div>
      </div>
    </div>
  </section>
)

export default Contact

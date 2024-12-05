import React from "react";
import SectionHeader from "./SectionHeader";

const Contact = () => (
  <section id="contact">
    <SectionHeader header="Give me a&nbsp;shout" subHeader="What can I do?" />
    <div className="container">
      <div className="row">
        <div className="col-12 pt-md-10 pb-5 pb-md-10 text-center gs_reveal">
          <p className="small text-secondary">Sorry spammers no contact info here!</p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

import React from "react";
import SectionHeader from "./SectionHeader";

const Contact = () => (
  <section id="contact" className="min-vh-80">
    <SectionHeader header="Like a chat?" subHeader="How can I help?" />
    <div className="container">
      <div className="row">
        <div className="col-12 pt-md-10 pb-5 pb-md-10 text-center gs_reveal">
          <p className="text-secondary">Please connect through LinkedIn!</p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

import React from "react";
import SectionHeader from "./SectionHeader";

const Contact = () => (
  <section id="contact" className="min-vh-80">
    <SectionHeader header="Like a chat?" subHeader="Give me a shout" />
    <div className="container">
      <div className="row">
        <div className="col-12 pt-md-10 pb-5 pb-md-10 text-center gs_reveal">
          <p className="text-secondary">Please connect through <a href="https://www.linkedin.com/in/haw-william/" target="_blank" rel="noopener noreferrer">LinkedIn</a>!</p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

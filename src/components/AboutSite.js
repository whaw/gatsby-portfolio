import React from "react";
import SectionHeader from "components/SectionHeader";
import Button from "components/Button";

const AboutSite = () => (
  <section id="about-this-site">
    <SectionHeader header="About this site" subHeader="A closer look" />
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 pr-lg-10 gs_reveal">
          <div role="heading" aria-level="5" className="h5">Situation</div>
          <p className="mb-0"><strong>This site serves a few purposes:</strong></p>
          <ol>
            <li>to provide a sample of execution and delivery,</li>
            <li>to act as a sandbox for experimentation and discovery, and</li>
            <li>to provide a little about me (fit being important).</li>
          </ol>
          <div role="heading" aria-level="5" className="h5">Task</div>
          <p>To develop a Gatsby, React website with an emphasis on growing proficiency in JavaScript tooling, and to demonstrate a level of polish and experience in delivery, based on web standards and best practices.</p>
        </div>
        <div className="col-12 col-md-6 gs_reveal">
          <div role="heading" aria-level="5" className="h5">Approach</div>
          <ul>
            <li>Gatsby, optimized for performance out of the box (thanks to static rendering)</li>
            <li>Bootstrap for faster development, with a cleaner, more maintainable code base</li>
            <li>Animations are with CSS, JavaScript and GSAP</li>
            <li>Other areas of focus: React best practices and design patterns</li>
            <li>Prettier and ESLint to keep everything clean and error free.</li>
          </ul>
          <div role="heading" aria-level="5" className="h5">Result</div>
          <p>Site is fast, consistent, accessible and performant.</p>
          <p>Increased knowledge in Gatsby, React, JavaScript, GraphQL and GSAP.</p>
          <p className="text-center text-md-left">
            <Button
            onClick={() => window.open('https://github.com/whaw/whaw.github.io/tree/source?utm_source=portsite&utm_medium=about__to_code_link')}
            className="btn btn-primary mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >To the code</Button>
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default AboutSite;

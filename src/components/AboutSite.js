import React from "react"
import Section from "./layout/Section"

const AboutSite = () => (
  <Section sectionId="about-this-site" header="About this site" subHeader="A closer look">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 pr-lg-10 gs_reveal">
          <div role="heading" aria-level="5" className="h5">Situation</div>
          <p>This site aims to provide a real world example of work, where learning and delivering on new technology is the norm, and movinging fast and iterating are the drivers – to achieve something greater...</p>
          <p className="mb-0">
            <strong>This site serves a few purposes:</strong></p>
          <ol>
            <li>to provide a sample of execution and delivery,</li>
            <li>to act as a sandbox for experimentation and discovery, and</li>
            <li>to provide a little about me (fit being important).</li>
          </ol>
          <div role="heading" aria-level="5" className="h5">Task</div>
          <p>
            To develop a Gatsby, React website with an emphasis on growing proficiency in JavaScript tooling.
          </p>
        </div>
        <div className="col-12 col-md-6 gs_reveal">
          <div role="heading" aria-level="5" className="h5">Approach</div>
          <ul>
            <li>Gatsby, for a fast, secure and performant site.</li>
            <li>Bootstrap to shorten development time (to focus on areas of higher returns).</li>
            <li>Animations are with JQuery, CSS, JSON and later added GSAP.</li>
            <li>GraphQL (Gatsby's perferred method) to declaratively query data.</li>
            <li>Prettier and ESLint to keep everything clean and error free.</li>
          </ul>
          <div role="heading" aria-level="5" className="h5">Result</div>
          <p>
            Site is fast and consistent, code and image
            optimizations are automated and dynamic content abstracted for
            dryer code.
          </p>
          <p>
            Increased knowledge in Gatsby, React, GraphQL, GSAP and JavaScript.
          </p>
          <p>
            <a
              href="https://github.com/whaw/whaw.github.io/tree/source?utm_source=portsite&utm_medium=about__to_code_link"
              className="btn btn-primary mt-2"
              role="button"
              target="_blank"
              rel="noreferrer"
            >To the code</a>
          </p>
        </div>
      </div>
    </div>
  </Section >
)

export default AboutSite

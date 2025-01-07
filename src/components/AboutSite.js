import React from "react";
import SectionHeader from "components/SectionHeader";
import Button from "components/Button";

const AboutSite = () => (
  <section id="about-this-site">
    <SectionHeader header="About this site" subHeader="A closer look" />
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 pr-lg-10 gs_reveal">
          <h5 className="h5">Situation</h5>
          <p>Being able to learn and deliver on new tech is essential in any role in my experience, so I thought it beneficial to show how that looks here, that is mainly with React – best viewed through that lens.</p>
          <p className="mb-0"><strong>So this site serves a few purposes:</strong></p>
          <ol>
            <li>to provide an example of work when adopting new technology</li>
            <li>to demonstrate a level of polish in delivery,</li>
            <li>to act as a sandbox for experimentation and discovery to learn and grow, and</li>
            <li>to provide a little about me (fit being important).</li>
          </ol>
          <h5 className="h5">Task</h5>
          <p>To develop a React website with an emphasis on growing proficiency in JavaScript tooling.</p>
        </div>
        <div className="col-12 col-md-6 gs_reveal">
          <h5 className="h5">Approach</h5>
          <ul>
            <li>Gatsby for performance, and for being built on React</li>
            <li>Bootstrap for faster development, less custom code and (some) future-proofing</li>
            <li>Animations are with CSS (again for performance), JavaScript and GSAP</li>
            <li>Other areas of focus: React best practices and design patterns</li>
            <li>Prettier and ESLint to keep everything clean and error-free</li>
          </ul>
          <h5 className="h5">Results</h5>
          <ul>
            <li>Site is fast, consistent, accessible and performant</li>
            <li>Increased knowledge in Gatsby, React, JavaScript, GraphQL and GSAP</li>
          </ul>

          <aside>Latest – obtained <a href="https://www.coursera.org/account/accomplishments/verify/P0D5ANW5L1N2" target="_blank" rel="noopener noreferrer">React Certification by Meta</a>, Coursera, November 2024</aside>

          <h5 className="h5">Next</h5>
          <ul>
            <li>TypeScript, Jest, React Testing library and Next.js</li>
          </ul>

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

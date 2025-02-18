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
          <p>Being able to learn and deliver on new tech has been essential in my experience, so I thought it beneficial to show how that looks for me here, in code&mdash;best viewed through that lens of learning, but also a focus on code quality and best practices.</p>
          <aside>
            <p>With a desire to learn and grow, this site acts as a sandbox for experimentation and discovery–that is "A Working Copy".</p>
          </aside>
          <h5 className="h5">Tasks</h5>
          <p>This site serves a few purposes:</p>
          <ol>
            <li>To provide an example of work (first pass) delivering on new technology</li>
            <li>To demonstrate a level of care and polish in delivery</li>
            <li>To grow proficiency in React and related tooling</li>
            <li>And to provide a little about me (fit being important)</li>
          </ol>
        </div>
        <div className="col-12 col-md-6 gs_reveal">
          <h5 className="h5">Approach</h5>
          <ul>
            <li>Gatsby, best fit for a static landing page, and for optimizations out of the box</li>
            <li>Bootstrap for faster development, cleaner codebase and some future-proofing</li>
            <li>Animations are with CSS (again for performance), JavaScript and GSAP</li>
            <li>Other areas of focus: React best practices and design patterns</li>
            <li>Prettier and ESLint to keep everything clean and error-free</li>
          </ul>
          <h5 className="h5">Results</h5>
          <ul>
            <li>Site is fast, consistent, accessible and performant</li>
            <li>Added knowlege in Gatsby, React, TypeScript, GraphQL and GSAP</li>
          </ul>

          {/* <aside>Latest – <a href="https://www.coursera.org/account/accomplishments/verify/P0D5ANW5L1N2" target="_blank" rel="noopener noreferrer">Meta React Certification</a>, Coursera, 11/2024</aside> */}

          <h5 className="h5">Next up</h5>
          <ul>
            <li>Next.js, Jest, React Testing library</li>
          </ul>

          <p className="text-center text-md-left">
            <Button
              onClick={() => window.open('https://github.com/whaw/whaw.github.io/tree/source?utm_source=portsite&utm_medium=about__to_code_link', '_blank', 'noopener,noreferrer')}
              className="btn btn-primary mt-2"
            >To the goods (github)</Button>
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default AboutSite;

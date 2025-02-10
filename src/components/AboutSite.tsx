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
          <p>Being able to deliver on new tech has been essential in my experience, so I thought it beneficial to show how that looks for me here, mostly in code&mdash;and best viewed through that lens of learning, an appreciation for code quality, maintainability and best practices.</p>

          <p>Keen interest in learning and growing, this site acts as "A Working Copy" for experimentation and discovery, in addition to the objectives mentioned below.</p>

          <h5 className="h5">Tasks</h5>
          <ol>
            <li>To provide an example of work when adopting new technology</li>
            <li>To demonstrate a level of knowledge, experience and polish in delivery</li>
            <li>To grow proficiency in React and JavaScript tooling</li>
            <li>To provide a little about me (fit being important)</li>
          </ol>
        </div>
        <div className="col-12 col-md-6 gs_reveal">
          <h5 className="h5">Approach</h5>
          <ul>
            <li>Gatsby, static site generator (SSG), best fit for static landing page</li>
            <li>Bootstrap for faster development, cleaner codebase and some future-proofing</li>
            <li>Animations are with CSS (again for performance), JavaScript and GSAP</li>
            <li>Other areas of focus: React best practices and design patterns</li>
            <li>Prettier and ESLint to keep everything clean and error-free</li>
          </ul>
          <h5 className="h5">Results</h5>
          <ul>
            <li>Site is fast, consistent, accessible and performant</li>
            <li>Increased knowledge in Gatsby, React, JavaScript, GraphQL and GSAP</li>
          </ul>

          {/* <aside>Latest – <a href="https://www.coursera.org/account/accomplishments/verify/P0D5ANW5L1N2" target="_blank" rel="noopener noreferrer">Meta React Certification</a>, Coursera, 11/2024</aside> */}

          <h5 className="h5">Next</h5>
          <ul>
            <li>TypeScript, Next.js, Jest and React Testing library</li>
          </ul>

          <p className="text-center text-md-left">
            <Button
              onClick={() => window.open('https://github.com/whaw/whaw.github.io/tree/source?utm_source=portsite&utm_medium=about__to_code_link', '_blank', 'noopener,noreferrer')}
              className="btn btn-primary mt-2"
            >To the code</Button>
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default AboutSite;

import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const AboutSite = () => (
  <section id="about-this-site">
    <div className="container section__header">
      <div className="row">
        <div className="col text-center">
          <h2>About this site</h2>
          <h3 className="text-secondary">A closer look</h3>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 pr-lg-10">
          <h5>Situation</h5>
          <p className="mb-4">Challenged and successful in the agency marketing space tooling, now focused on gaining mastery in all things JavaScript, here and in future roles.</p>
          <div className="px-3 py-2 mb-4">
            <p className="mb-0">
              <strong>This site serves a few purposes:</strong></p>
            <ol className="custom-alpha-list">
              <li>to provide a sample of execution and delivery,</li>
              <li>to demonstrate an ability to adopt new technologies,</li>
              <li>to act as a sandbox, for experimentation and discovery, and</li>
              <li>to provide a little about me.</li>
            </ol>
          </div>
          <h5>Task</h5>
          <p>
            To migrate a static version of this website to Gatsby, React, with
            an emphasis on building JavaScript tooling.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <h5>Approach</h5>
          <ul className="row">
            <li className="col-12 col-sm-6 px-0">SCSS, BEM</li>
            <li className="col-12 col-sm-6 px-0">Bootstrap</li>
            <li className="col-12 col-sm-6 px-0">Gatsby, React</li>
            <li className="col-12 col-sm-6 px-0">JQuery</li>
            <li className="col-12 col-sm-6 px-0">GraphQL</li>
            <li className="col-12 col-sm-6 px-0">ESLint, Prettier</li>
          </ul>
          <h5>Result</h5>
          <p>
            Site is fast and consistent, code and image
            optimizations are automated and dynamic content abstracted for
            dryer code.
          </p>
          <p>
            Increased knowledge in Gatsby, React, GraphQL and JavaScript.
          </p>
          <p>
            <a
              href="https://github.com/whaw/whaw.github.io/tree/source?utm_source=portsite&utm_medium=github_link"
              className="btn btn-primary border mt-1"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              To the goods (Github)
            </a>
          </p>
        </div>
      </div>
    </div>
  </section >
)

export default AboutSite

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
          <p>Challenged and successful in the agency marketing space tooling, now focused on gaining mastery in all things JavaScript, here and in future roles.</p>
          <p>
            This site serves a few purposes:</p>

          <ol className="custom-alpha-list">
            <li>to act as a sandbox, for experimentation and discovery,</li>
            <li>to demonstrate an ability to adopt new technologies and</li>
            <li>to provide a sample of execution and delivery.</li>
          </ol>
          <h5>Task</h5>
          <p>
            To migrate a static version of this website to Gatsby, React, with
            an emphasis on building JavaScript tooling.
          </p>
          <h5>Approach</h5>
          <ul className="row">
            <li className="col-12 col-sm-6 px-0">SCSS, BEM</li>
            <li className="col-12 col-sm-6 px-0">Bootstrap</li>
            <li className="col-12 col-sm-6 px-0">Gatsby, React</li>
            <li className="col-12 col-sm-6 px-0">JQuery</li>
            <li className="col-12 col-sm-6 px-0">GraphQL</li>
            <li className="col-12 col-sm-6 px-0">ESLint, Prettier</li>
          </ul>
        </div>
        <div className="col-12 col-md-6">
          <h5>Result</h5>
          <p>
            Site is fast and consistent*, code and image
            optimizations are automated and dynamic content abstracted for
            dryer code.
          </p>
          <p>
            Increased knowledge in Gatsby, React, GraphQL and JavaScript.
          </p>
          <b>Lighthouse scores</b><br />
          (mostly thanks to Gatsby):<br />
          <div className="row pt-5 pb-7 pb-sm-5 pb-lg-7">
            <div className="col-12 col-sm-5 col-md-12 col-lg-5 mr-sm-5 pb-4 pb-lg-0 text-center ">
              <div className="pb-2"><small>Mobile</small></div>
              <StaticImage
                src="../images/lighthouse-mobile.png"
                placeholder="tracedSVG"
                alt="lighthouse mobile score"
                className="lighthouse-scores-image"
              />
            </div>
            <div className="col-12 col-sm-5 col-md-12 col-lg-5 text-center">
              <div className="pb-2"><small>Desktop</small></div>
              <StaticImage
                src="../images/lighthouse-desktop.png"
                placeholder="tracedSVG"
                alt="lighthouse desktop score"
                className="lighthouse-scores-image"
              />
            </div>
          </div>
          <p>
            <a
              href="https://github.com/whaw/whaw.github.io/tree/source"
              className="btn btn-primary border mt-0 mb-3"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              To the goods (Github)
            </a>
          </p>
          <p><small>*Testing was limited to Mac Safari, Chrome and Firefox, to focus on the primary purpose, to build skills and provide a sample of work.</small></p>
        </div>
      </div>
    </div>
  </section >
)

export default AboutSite

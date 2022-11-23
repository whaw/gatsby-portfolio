import React from "react"

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
          <p>
            Challenged and successful in the wide range of tooling in the agency marketing space, now focused on gaining mastery in all things JavaScript.</p>
          <p>
            This site serves as a sandbox ("A Working Copy"), as well as demonstrating a level of polish and an ability to adopt new technologies.
          </p>
          <h5>Task</h5>
          <p>
            Migrate static version of this site to Gatsby, React, with
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
            Site is fast and consistent across platforms, code and image
            optimizations are automated and dynamic content abstracted for
            dryer code.
          </p>
          <p>
            Increased knowledge in Gatsby, React, GraphQL and JavaScript.
          </p>
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
          <p>Stay tuned. More on the way!</p>
          {/* <div className="card">
            <div className="card-body">
              <p className="card-text">
                <strong>Next,</strong> exploring REST, unit testing, TypeScript and Express.</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </section >
)

export default AboutSite

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
            Challenged and successful in the agency marketing space, pivoting
            from a general front end developer to a JavaScript specialist, this
            site aims to demonstrate a level of polish in delivery and an
            ability to adopt new technologies, through the discovery of new
            tools &mdash; that is, "A Working Copy".
          </p>
          <h5>Task</h5>
          <p>
            Migrate static version of this site to a Gatsby, React version, with
            a focus on building JavaScript tooling and code quality.
          </p>
          <h5>Approach</h5>
          <ul className="row">
            <li className="col-12 col-sm-6 px-0">SCSS, BEM</li>
            <li className="col-12 col-sm-6 px-0">Bootstrap</li>
            <li className="col-12 col-sm-6 px-0">Gatsby, React</li>
            <li className="col-12 col-sm-6 px-0">JQuery, Typescript</li>
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
            Increased knowledge in Gatsby, React, GraphQL, JavaScript and
            TypeScript.
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
        </div>
      </div>
    </div>
  </section>
)

export default AboutSite

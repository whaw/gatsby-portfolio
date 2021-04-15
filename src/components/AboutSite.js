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
        <div className="col-12 col-md-6">
          <h4>Situation</h4>
          <p>
            Challenged and successful in the agency marketing space, pivoting
            from a general front end developer to a JavaScript specialist, this
            site aims to demonstrate a level of polish in delivery and an
            ability to adopt new technologies, through the discovery of new
            tools &mdash; that is, "a working copy".
          </p>
          <h4>Task</h4>
          <p>Migrate static version of this site to a Gatsby, React version.</p>
        </div>
        <div className="col-12 col-md-6">
          <h4>Approach</h4>
          <ul className="row">
            <li className="col-12 col-sm-6">SCSS/BEM</li>
            <li className="col-12 col-sm-6">Bootstrap</li>
            <li className="col-12 col-sm-6">Gatsby/React</li>
            <li className="col-12 col-sm-6">JQuery</li>
            <li className="col-12 col-sm-6">GraphQL</li>
            <li className="col-12 col-sm-6">ESLint/Prettier</li>
          </ul>
          <p>
            <a
              href="https://github.com/whaw/whaw.github.io/tree/source"
              className="btn btn-primary border mb-2 mb-xl-5"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              To the goods (Github)
            </a>
          </p>

          <h4>Result</h4>
          <p>
            Site is fast and consistent across platforms, code and image
            optimizations are automated and dynamic content abstracted for
            dryer code.
          </p>
          <p>Stay tuned. More on the way!</p>
        </div>
      </div>
    </div>
  </section>
)

export default AboutSite

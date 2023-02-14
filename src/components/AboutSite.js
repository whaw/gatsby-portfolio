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
          <p>Challenged and successful in the agency marketing space tooling, now focused on gaining mastery in all things JavaScript, here and in future roles.</p>
          <p className="mb-0">
            <strong>This site serves a few purposes:</strong></p>
          <ol className="custom-alpha-list">
            <li>to provide a sample of execution and delivery,</li>
            <li>to demonstrate an ability to adopt new technologies,</li>
            <li>to act as a sandbox, for experimentation and discovery, and</li>
            <li>to provide a little about me.</li>
          </ol>
          <h5>Task</h5>
          <p>
            To migrate a static version of this website to Gatsby, React, with
            an emphasis on building JavaScript tooling.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <h5>Approach</h5>
          <p>Move fast and iterate.</p>
          <ul className="row">
            <li className="col-12 px-0">Gatsby, React, to take it for a spin - for a fast, secure and performant site.</li>
            <li className="col-12 px-0">Bootstrap for development speed. No need to reinvent the wheel.</li>
            <li className="col-12 px-0">Animation is with JQuery, CSS for transitions and JSON.</li>
            <li className="col-12 px-0">GraphQL (Gatsby's perferred method) to declaratively query data.</li>
            <li className="col-12 px-0">ESLint and Prettier to keep everything clean and error free.</li>
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
        </div>
      </div>
    </div>
  </section>
)

export default AboutSite

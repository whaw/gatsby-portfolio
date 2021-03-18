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
          <h4>Objective</h4>
          <p>
            To demostrate a level of excellence that I strive for in everything
            that I do, with a laser focus on customer, and to provide a sense of
            who I am, as team fit is paramount to success.
          </p>
          <aside className="pl-3">
            <p>
              Much of the work done here with JavaScript and frameworks are new
              to me and are to serve two purposes: to provide insight into how I
              adopt new technologies, and to further my skills to becoming a
              JavaScript specialist.
            </p>
          </aside>
          <h4>Build stack</h4>
          <ul className="row">
            <li className="col-12 col-md-6 px-0">SCSS</li>
            <li className="col-12 col-md-6 px-0">Bootstrap</li>
            <li className="col-12 col-md-6 px-0">JQuery</li>
            <li className="col-12 col-md-6 px-0">React</li>
            <li className="col-12 col-md-6 px-0">Gatsby</li>
          </ul>
        </div>
        <div className="col-12 col-md-6">
          <h4>Approach</h4>
          <p>
            SCSS for clean dry code.
            <br />
            Bootstrap and JQuery for speed of delivery.
            <br />
            Gatsby and React for efficiences in site performance and ongoing
            management.
          </p>
          <h4>Result</h4>
          <p>
            Site is fast, efficient and is consistent across platforms. Further
            enhancements are in progress, in my relentless pursuit to do great
            work.
          </p>
          <p>
            <a
              href="https://github.com/whaw/whaw.github.io"
              s
              className="btn btn-primary"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              To the code
            </a>{" "}
            <a href="#contact" className="btn btn-primary" role="button">
              Let's chat
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default AboutSite

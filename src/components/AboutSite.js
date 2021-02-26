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
            To demostrate the polish and attention to detail that I strive for
            in my work, and a sense of who I am, as cultural fit is equally
            important to being at our best.
          </p>
          <p>
            And moreover, to provide insight into how I ramp on new technologies
            - the "get it working" stage (of "get it working", "make it right",
            "make it fast").
          </p>
          <h4>Build Stack</h4>
          <ul className="row">
            <li className="col-6 col-md-12">
              <strong>Bootstrap,</strong> to get up and running quickly and
              leave the browser management to a dedicated team
            </li>
            <li className="col-6 col-md-12">
              <strong>JQuery, SCSS,</strong> for DOM manipulation and animations
            </li>
            <li className="col-6 col-md-12">
              <strong>Gatsby, React, </strong> for speed and performance
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6">
          <h4>Approach</h4>
          <p>
            <strong>Why the use of libraries?</strong>
            <br />
            Speed of delivery and efficiencies in ongoing mangement. I have
            years of hand coding that predates these libraries (argh haha), but
            as times evolve, so do I, and I remain flexible and open to what is
            best suited and most efficent for the needs of a project.
          </p>
          <h4>Result</h4>
          <p>
            Site is fast and is consistent across platforms. Further
            enhancements are in progress as this is V1 and the mandate is to
            move fast, deploy often and iterate.
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
              To the code (Github)
            </a>{" "}
            <a href="#contact" className="btn btn-primary" role="button">
              Let's talk
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default AboutSite

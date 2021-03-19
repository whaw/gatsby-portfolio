import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => (
  <>
    <section id="aboutMe" className="skills">
      <div className="container section__header">
        <div className="row">
          <div className="col text-center">
            <h2>Introductions</h2>
            <h3 className="text-secondary">What I bring</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <StaticImage
              src="../images/me.png"
              className="introductions__me mb-3 mr-5 mt-0"
              layout="FULL_WIDTH"
              placeholder="TRACED_SVG"
              alt="author"
              style={{ width: "25%", float: "left" }}
            />
            <h5>William has a wide view on the web development process.</h5>
            <p>
              As a young lad he left Vancouver, with a Diploma in Advanced Web
              Content Development in hand, for the bright lights of Toronto.
              There he built on his understanding of how things work with
              courses in .NET applications development (but that was a long time
              ago), project coordinating, quality assurance, frontline
              client support and hands-on, hand coding throughout his many years
              of experience.
            </p>
            <p>
              Driven to produce better web content for all, he has helped
              companies such as Anderson DDB, Transcontinental, Andrew Peller
              and many more meet their web objectives, while earning the
              appreciation of happy clients and a few awards along the way.
            </p>
            <p>
              And when he's not in digital space, he can be found in the great
              outdoors. He loves the outdoors. Like, loves loves the outdoors,
              and MEC.
            </p>
            <p className="text-center">
              <a
                href="assets/downloads/William-Haw-CV.pdf"
                className="btn btn-primary border"
                role="button"
              >
                To the resume
              </a>
            </p>
          </div>
          <div className="col-12 col-lg-7 pl-lg-8">
            <div className="row skills__content position-relative text-center text-md-left js_skills mx-1 mx-sm-0">
              <div className="col-12 col-sm-6 px-0 pb-7 pb-sm-5 pb-md-3 skills__col text-center text-sm-left">
                <h4 className="bullet">hard skills</h4>
                <ul className="list-unstyled">
                  <li>HTML5, CSS3, SCSS</li>
                  <li>Bootstrap</li>
                  <li>React, Gatsby</li>
                  <li>JavaScript/JQuery</li>
                  <li>Twig/Django</li>
                  <li>Gulp, Webpack</li>
                  <li>Responsive Design</li>
                  <li>Platform consistent</li>
                  <li>Accurate to creative</li>
                  <li>WordPress, Craft</li>
                  <li>A/B testing</li>
                  <li>Git</li>
                  <li>and....</li>
                </ul>
                <div className="skills__closing-text">
                  <small>working to be</small>
                  <br />
                  <span className="skills__closing-text--em font-weight-bold">
                    greater
                  </span>
                </div>
              </div>
              <div className="col-12 col-sm-6 px-0 py-5 pt-sm-0 skills__col text-center text-sm-right">
                <h4 className="bullet">soft skills</h4>
                <ul className="list-unstyled">
                  <li>Critical thinking</li>
                  <li>Taking ownership</li>
                  <li>Resourceful</li>
                  <li>Adaptible</li>
                  <li>Determined</li>
                  <li>Organized</li>
                  <li>Detail oriented</li>
                  <li>Dependable</li>
                  <li>Flexible</li>
                  <li>Supportive</li>
                  <li>Empathetic</li>
                  <li>Sense of humor</li>
                  <li>and....</li>
                </ul>
                <div className="skills__closing-text">
                  <small>working to be</small>
                  <br />
                  <span className="skills__closing-text--em font-weight-bold">
                    stronger
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default About

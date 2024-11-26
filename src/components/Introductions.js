import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SectionHeader from "./SectionHeader"

const Introductions = () => {
  return (
    <section id="introductions">
      <SectionHeader header="Introductions" subHeader="What I bring" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 pb-10 pb-lg-0 gs_reveal">
            <StaticImage
              src="../assets/images/me.png"
              className="introductions__me mb-1 mr-3 mb-md-2 mr-md-4 mt-0"
              alt="author"
              style={{ width: "25%", float: "left" }}
            />
            <div className="h5">William has a wide view on the web development process.</div>
            <p>
              As a young lad he left Vancouver, with a Diploma in Advanced Web
              Content Development in hand, for the bright lights of Toronto.
              There he built on his understanding of how things work with
              courses in .NET applications development (but that was a long time
              ago), project coordinating, quality assurance, frontline
              client support and hands-on, hand coding throughout his many years
              of experience.
            </p>
            <p>
              Driven to produce better web content for all, he has helped
              companies such as Anderson DDB, Transcontinental, Andrew Peller
              and many more meet their web objectives, while earning the
              appreciation of happy clients and a few awards along the way.
            </p>
            <p>
              And when he's not in digital space, he can be found in the great
              outdoors. He loves the outdoors. Like, loves loves the outdoors,
              and MEC.
            </p>
            <p className="text-center">
              <a
                href="#experience"
                className="btn btn-primary border d-lg-none"
                role="button"
              >
                To Experience
              </a>
            </p>
          </div>
          <div className="col-12 col-lg-7 pl-lg-5 pl-xl-8 skills position-relative gs_reveal">
            <div className="row skills__content position-relative text-center text-md-left js_skills mx-1 mx-sm-0">
              <div className="col-12 col-sm-6 px-0 pb-7 pb-sm-5 pb-md-3 skills__col text-center text-sm-left">
                <h4 className="bullet pb-2">Hard skills</h4>
                <ul className="list-unstyled">
                  <li>HTML5, CSS3, SCSS</li>
                  <li>JavaScript, JQuery</li>
                  <li>Design patterns</li>
                  <li>React, Gatsby</li>
                  <li>Bootstrap, Twig</li>
                  <li>Responsive Design</li>
                  <li>Render consistency</li>
                  <li>Accurate to creative</li>
                  <li>WordPress, Craft</li>
                  <li>A/B testing, SEO</li>
                  <li>Web accessibility</li>
                  <li>HTML email</li>
                  <li>and...</li>
                </ul>
                <div className="skills__closing-text">
                  <small>Working to be</small>
                  <br />
                  <span className="skills__closing-text--em font-weight-bold">
                    greater
                  </span>
                </div>
              </div>
              <div className="col-12 col-sm-6 px-0 py-5 pt-sm-0 skills__col text-center text-sm-right">
                <h4 className="bullet pb-2">Soft skills</h4>
                <ul className="list-unstyled">
                  <li>Problem solving</li>
                  <li>Taking ownership</li>
                  <li>Entrepeneurial</li>
                  <li>Resourceful</li>
                  <li>Flexible</li>
                  <li>Professional</li>
                  <li>Organized</li>
                  <li>Curious</li>
                  <li>Creative</li>
                  <li>Detailed</li>
                  <li>Strong team values</li>
                  <li>Desire to learn and grow</li>
                  <li>and...</li>
                </ul>
                <div className="skills__closing-text">
                  <small>Working to be</small>
                  <br />
                  <span className="skills__closing-text--em font-weight-bold">
                    stronger
                  </span>
                </div>
              </div>
              <div className="position-absolute mouse-text d-none d-md-block">
                The intersection of form and function
                <br />
                Iconic design by Tinker Hatfield, Nike "Innovation Kitchen" lead
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introductions

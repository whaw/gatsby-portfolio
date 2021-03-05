import React from "react"

const Skills = () => (
  <>
    <section id="skills" className="skills">
      <div className="container section__header">
        <div className="row">
          <div className="col text-center">
            <h2>Skills</h2>
            <h3 className="text-secondary">What I bring ...</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row skills__content border position-relative bg-light p-5 text-center text-md-left js_skills">
          <div className="col-12 col-sm-6 pb-5 pb-md-0 pt-3 pt-md-5 pt-lg-0 skills-col text-center text-sm-left">
            <h4 className="bullet">hard skills</h4>
            <ul className="list-unstyled">
              <li>HTML5, CSS3, SCSS</li>
              <li>Bootstrap</li>
              <li>Twig/Django</li>
              <li>JavaScript/JQuery</li>
              <li>React</li>
              <li>Gulp, Webpack</li>
              <li>Responsive Design</li>
              <li>Browser/device consistency</li>
              <li>Accurate to creative</li>
              <li>WordPress, Craft</li>
              <li>A/B testing</li>
              <li>Git</li>
              <li>and....</li>
            </ul>
            <div className="display-4">
              <small>working to be</small>
              <br />
              <span className="skills__text--em">greater</span>
            </div>
          </div>
          <div className="col-12 col-sm-6 pt-3 pt-md-5 pt-lg-0 skills-col text-center text-sm-right">
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
            <div className="display-4">
              <small>working to be</small>
              <br />
              <span className="skills__text--em">stronger</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Skills

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
          <div className="col-12 col-sm-6 pb-7 pb-sm-5 pb-md-3 skills__col text-center text-sm-left">
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
            <div className="skills__closing-text">
              <small>working to be</small>
              <br />
              <span className="skills__closing-text--em font-weight-bold">
                greater
              </span>
            </div>
          </div>
          <div className="col-12 col-sm-6 py-5 pt-sm-0 skills__col text-center text-sm-right">
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
    </section>
  </>
)

export default Skills

import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Introductions = () => (
  <section id="introductions" className="introductions">
    <div className="container section__header">
      <div className="row">
        <div className="col text-center">
          <h2>Introductions</h2>
          <h3 className="text-secondary">Focused on people and experiences</h3>
        </div>
      </div>
    </div>
    <div className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 text-center pb-8 px-5">
            <StaticImage
              src="../images/me.png"
              className="introductions__me"
              layout="FULL_WIDTH"
              placeholder="TRACED_SVG"
              alt="author"
            />
            <StaticImage
              src="../images/dog.png"
              className="position-absolute introductions__dog"
              layout="FULL_WIDTH"
              placeholder="TRACED_SVG"
              alt="dog"
            />
          </div>
          <div className="col-12 col-lg-8 py-7 py-md-5 pl-md-7">
            <h4>William has a wide view on the web development process.</h4>
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
            <p>
              <a
                href="assets/downloads/William-Haw-CV.pdf"
                className="btn btn-primary"
                role="button"
                target="_blank"
              >
                Checkout professional experience (CV)
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Introductions

// Sourced: https://codepen.io/acxix92/pen/yzOazE
// Note: minor edits to resolve compilation errors

import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./Timeline.css"
import initiateTimeline from "./Timeline-script" // (aside: cleared some compilation errors)

const Timeline = () => {
  useEffect(() => {
    initiateTimeline()
  })
  return (
    <section id="timeline" className="bg-light py-11 py-lg-15">
      <div className="container section__header">
        <div className="row">
          <div className="col text-center">
            <h2>Experience</h2>
            <h3 className="text-secondary">At a glance</h3>
          </div>
        </div>

        {/* BRANDS */}
        <div className="row d-none d-md-flex align-items-center justify-content-between px-xl-15 mx-xl-10 pt-9">
          <div className="col-2 col-sm-1">
            <StaticImage
              src="../../images/companies/knorr.svg"
              className="w-100"
              placeholder="TRACED_SVG"
              alt="Knorr"
            />
          </div>
          <div className="col-2 col-sm-1">
            <StaticImage
              src="../../images/companies/apple.svg"
              className="mx-md-2"
              placeholder="TRACED_SVG"
              alt="Apple"
            />
          </div>
          <div className="col-2 col-sm-1">
            <StaticImage
              src="../../images/companies/canadaPost.svg"
              className="mx-md-2"
              placeholder="TRACED_SVG"
              alt="Canada Post"
            />
          </div>
          <div className="col-2 col-sm-1">
            <StaticImage
              src="../../images/companies/ADDB.svg"
              className="w-100"
              placeholder="TRACED_SVG"
              alt="Anderson DDB"
            />
          </div>
          <div className="col-2 col-sm-1">
            <StaticImage
              src="../../images/companies/marvel.svg"
              className="w-100"
              placeholder="TRACED_SVG"
              alt="Marvel Comics"
            />
          </div>
          <div className="col-2 col-sm-1">
            <StaticImage
              src="../../images/companies/johnsonAndJohnson.svg"
              className="w-100"
              placeholder="TRACED_SVG"
              alt="Johnson and Johnson"
            />
          </div>
          <div className="col-2 col-sm-1">
            <StaticImage
              src="../../images/companies/yorkU.png"
              className="w-100"
              placeholder="TRACED_SVG"
              alt="York University"
            />
          </div>
          <div className="col-2 col-sm-1">
            <StaticImage
              src="../../images/companies/peller.png"
              className="w-100"
              placeholder="TRACED_SVG"
              alt="Peller Estates"
            />
          </div>
          <div className="col-2 col-sm-1">
            <StaticImage
              src="../../images/companies/trius.png"
              className="w-100"
              placeholder="TRACED_SVG"
              alt="Trius Winery"
            />
          </div>
          <div className="col-2 col-sm-1">
            <StaticImage
              src="../../images/companies/thirtybench.png"
              className="w-100"
              placeholder="TRACED_SVG"
              alt="Thirty Bench Winery"
            />
          </div>
          <div className="col-2 col-sm-1">
            <StaticImage
              src="../../images/companies/gretzky.png"
              className="w-100"
              placeholder="TRACED_SVG"
              alt="Wayne Gretzky Estates"
            />
          </div>
        </div>
        <p className="d-none d-md-block small text-center text-secondary pt-1">
          Some brands I have had the privilege to contribute
        </p>
      </div>

      {/* TIMELINE */}
      <div className="row px-xl-15">
        <div className="col">
          <div className="cd-horizontal-timeline">
            <div className="timeline">
              <div className="events-wrapper">
                <div className="events">
                  <ol>
                    <li>
                      <a href="#0" data-date="1/1/2004" className="selected">
                        2004
                      </a>
                    </li>
                    <li>
                      <a href="#0" data-date="1/1/2006">
                        2006
                      </a>
                    </li>
                    <li>
                      <a href="#0" data-date="1/1/2015">
                        2015
                      </a>
                    </li>
                    <li>
                      <a href="#0" data-date="1/1/2016">
                        2016 - 2020
                      </a>
                    </li>
                    <li>
                      <a href="#0" data-date="1/1/2021">
                        2021
                      </a>
                    </li>
                  </ol>

                  <span className="filling-line" aria-hidden="true"></span>
                </div>
              </div>

              <ul className="cd-timeline-navigation">
                <li>
                  <a href="#0" className="prev inactive">
                    Prev
                  </a>
                </li>
                <li>
                  <a href="#0" className="next">
                    Next
                  </a>
                </li>
              </ul>
            </div>

            <div className="events-content">
              <ol>
                <li className="selected" data-date="1/1/2004">
                  <h4>TK</h4>
                  <em>June 14th, 2016</em>
                  <p>
                    AMA issues CSAPH 2-A-16, “Human Environmental Effects of LED
                    Community Lighting.”
                  </p>
                </li>
                <li data-date="1/1/2006">
                  <h4>TK</h4>
                  <em>June 14th, 2016</em>
                  <p>
                    AMA issues CSAPH 2-A-16, “Human Environmental Effects of LED
                    Community Lighting.”
                  </p>
                </li>
                <li data-date="1/1/2015">
                  <h4>TK</h4>
                  <em>June 14th, 2016</em>
                  <p>
                    AMA issues CSAPH 2-A-16, “Human Environmental Effects of LED
                    Community Lighting.”
                  </p>
                </li>
                <li data-date="1/1/2016">
                  <h4>TK</h4>
                  <em>June 21st, 2016-2020</em>
                  <p>
                    CNN publishes “Doctors issue warning about LED
                    streetlighting.”
                  </p>
                </li>
                <li data-date="1/1/2021">
                  <h4>Present</h4>
                  <em>June 21st, 2021</em>
                  <p>
                    CNN publishes “Doctors issue warning about LED
                    streetlighting.”
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center">
        <a href="#" className="btn btn-primary border" role="button">
          To the code
        </a>
      </p>
    </section>
  )
}

export default Timeline

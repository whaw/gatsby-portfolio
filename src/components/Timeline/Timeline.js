// Sourced: https://codepen.io/acxix92/pen/yzOazE
// Note: minor edits made to resolve compilation errors

import React, { useEffect } from "react"
import "./Timeline.css"
import initiateTimeline from "./Timeline-script" // (aside: cleared some compilation errors)

function Timeline() {
  useEffect(() => {
    initiateTimeline()
  })
  return (
    <section id="timeline">
      <div className="container section__header">
        <div className="row">
          <div className="col text-center">
            <h4>Past experience</h4>
            <h3 className="text-secondary">At a glance</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="cd-horizontal-timeline">
            <div className="timeline">
              <div className="events-wrapper">
                <div className="events">
                  <ol>
                    <li>
                      <a href="#0" data-date="14/06/2016" className="selected">
                        June 14
                      </a>
                    </li>
                    <li>
                      <a href="#0" data-date="21/06/2016">
                        June 21
                      </a>
                    </li>
                    <li>
                      <a href="#0" data-date="24/06/2016">
                        June 24
                      </a>
                    </li>
                    <li>
                      <a href="#0" data-date="30/06/2016">
                        June 21-30
                      </a>
                    </li>
                    <li>
                      <a href="#0" data-date="08/07/2016">
                        {" "}
                        July
                      </a>
                    </li>
                    <li>
                      <a href="#0" data-date="17/07/2016">
                        June 28
                      </a>
                    </li>
                    <li>
                      <a href="#0" data-date="23/07/2016">
                        June 30
                      </a>
                    </li>
                    <li>
                      <a href="#0" data-date="26/07/2016">
                        Aug 23
                      </a>
                    </li>
                    <li>
                      <a href="#0" data-date="30/07/2016">
                        Sep 25
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
                <li className="selected" data-date="14/06/2016">
                  <h4>TK</h4>
                  <em>June 14th, 2016</em>
                  <p>
                    AMA issues CSAPH 2-A-16, “Human Environmental Effects of LED
                    Community Lighting.”
                  </p>
                </li>

                <li data-date="21/06/2016">
                  <h4>TK</h4>
                  <em>June 21st, 2016</em>
                  <p>
                    CNN publishes “Doctors issue warning about LED
                    streetlighting.”
                  </p>
                </li>

                <li data-date="24/06/2016">
                  <h4>TK</h4>
                  <em>June 24th, 2016</em>
                  <p>
                    In response to AMA Report 2-A-16, IES Issues “IES Board
                    Position on AMA CSAPH Report 2-A-16.
                  </p>
                </li>

                <li data-date="30/06/2016">
                  <h4>TK</h4>
                  <em>June 21-30th, 2016</em>
                  <p>
                    Various entities in the lighting community issue responses
                    to AMA Report 2-A-16.
                  </p>
                </li>

                <li data-date="08/07/2016">
                  <h4>TK</h4>
                  <em>July, 2016</em>
                  <p>Lighting publications report on the AMA controversy.</p>
                </li>

                <li data-date="17/07/2016">
                  <h4>TK</h4>
                  <em>June 28th, 2017</em>
                  <p>
                    IES issues Position Statement PS-09-17 (status update of
                    dialogue with AMA).
                  </p>
                </li>

                <li data-date="23/07/2016">
                  <h4>TK</h4>
                  <em>June 30th, 2017</em>
                  <p>IALD endorses IES Position Statement PS-09-17.</p>
                </li>

                <li data-date="26/07/2016">
                  <h4>TK</h4>
                  <em>August 23rd, 2017</em>
                  <p>
                    U.S. Department of Energy’s Solid-State Lighting program
                    issues an activity and research update in its SSL Postings
                    newsletter.
                  </p>
                </li>

                <li data-date="30/07/2016">
                  <h4>TK</h4>
                  <em>September 25, 2017</em>
                  <p>
                    The Washington Post publishes, “Some cities are taking
                    another look at LED lighting after AMA warning.”
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

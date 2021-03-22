// Sourced: https://codepen.io/acxix92/pen/yzOazE
// Note: minor edits to resolve compilation errors

import React, { useEffect } from "react"
import "./Timeline.css"
import initiateTimeline from "./Timeline-script" // (aside: cleared some compilation errors)

const Timeline = () => {
  useEffect(() => {
    initiateTimeline()
  })
  return (
    <>
      <div className="container">
        <div className="row px-xl-15 pt-5">
          <div className="col">
            <div className="cd-horizontal-timeline">
              <div className="timeline">
                <div className="events-wrapper">
                  <div className="events">
                    <ol>
                      <li>
                        <a
                          href="#0"
                          data-date="1/1/2006"
                          className="selected small"
                        >
                          2004-06
                        </a>
                      </li>
                      <li>
                        <a href="#0" data-date="1/1/2007" className="small">
                          2006
                        </a>
                      </li>
                      <li>
                        <a href="#0" data-date="1/1/2015" className="small">
                          2007-15
                        </a>
                      </li>
                      <li>
                        <a href="#0" data-date="1/1/2016" className="small">
                          2015-16
                        </a>
                      </li>
                      <li>
                        <a href="#0" data-date="1/1/2020" className="small">
                          2016-20
                        </a>
                      </li>
                      <li>
                        <a href="#0" data-date="1/1/2021" className="small">
                          present
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
                  <li className="selected" data-date="1/1/2006">
                    <h4>Ecom Bcom</h4>
                    <em>2004 - 2006</em>
                    <p>
                      Oversaw all design and development of two catalog websites
                      (front end only, hand coding, no frameworks) for a travel
                      accessories and gift baskets, respectively.
                    </p>
                  </li>
                  <li data-date="1/1/2007">
                    <h4>Freelance + .NET classes</h4>
                    <em>2006</em>
                    <p>
                      Contract for Ogilvy, Eloqua, N49 and night classes for
                      applications development, respectively.
                    </p>
                    <p>
                      Filled gaps developing banner ads, HTML emails, HTML and
                      CSS interfaces, and Flash.
                    </p>
                  </li>
                  <li data-date="1/1/2015">
                    <h4>Splash Interactive</h4>
                    <em>2007 - 2015</em>
                    <p>
                      Ongoing: HTML emails, website updates, Flash animations.
                      <br />
                      Not limited to, but some websites:
                    </p>
                    <div className="row">
                      <div className="col-12 col-lg-6 pl-0">
                        <p>
                          HAND CODED RESPONSIVE INTERFACE + BOOTSTRAP
                          <br />
                          The Wine Shop (ecommerce, Magento)
                          <br />
                          skinnygrape
                        </p>
                        <p>
                          CUSTOMIZED WORDPRESS THEMES + HAND CODED RESPONSIVE
                          MARKUP
                          <br />
                          Marsh STARS ONE
                          <br />
                          Pingtu
                          <br />
                          Ripple Digital Publishing
                          <br />
                          Next Sentence
                        </p>
                      </div>
                      <div className="col-12 col-md-6 pl-0 pl-lg-3">
                        <p>
                          HAND CODED INTERFACES
                          <br />
                          Online Reservation Website (ecommerce, Magento)
                          <br />
                          Trius Winery (ecommerce, Magento)
                          <br />
                          Wayne Gretzky Estate Wines (ecommerce, Magento)
                          <br />
                          aHUS Canada (Wordpress)
                          <br />
                          Association of PNH (Wordpress)
                          <br />
                          Thalassemia (Wordpress)
                        </p>
                      </div>
                    </div>
                  </li>
                  <li data-date="1/1/2016">
                    <h4>Forge Media</h4>
                    <em>2015 - 2016</em>
                    <p>Fullstack development with Wordpress.</p>
                    <p>
                      Execution of content for entrprise website -
                      implementation, customization and debugging, managing high
                      volume of tickets, coordinating with several offsite
                      teams, for QA, translations and direction.
                    </p>
                  </li>
                  <li data-date="1/1/2020">
                    <h4>Wave Financial</h4>
                    <em>2016 - 2020</em>
                    <p>
                      Development of public facing website. Stack: Django,
                      python, HTML, CSS, Javascript, Craft
                      <br />
                    </p>
                  </li>
                  <li data-date="1/1/2021">
                    <h4>Present</h4>
                    <p>Developing JS skills, by way of this beauty!</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Timeline

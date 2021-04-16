// Sourced: https://codepen.io/acxix92/pen/yzOazE

import React, { useEffect } from "react"
import "./Timeline.css" // resolved navigation bug
import initiateTimeline from "./Timeline-script" // cleared some minor compilation errors. "Warnings" TBA

const Timeline = () => {
  // address: timeline does not resize with window, so end of line ends up short

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
                          data-date="1/1/2004"
                          className="selected small"
                        >
                          2002-04
                        </a>
                      </li>
                      <li>
                        <a href="#0" data-date="1/1/2005" className="small">
                          2004-2005
                        </a>
                      </li>
                      <li>
                        <a href="#0" data-date="1/1/2015" className="small">
                          2005-15
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
                          Present
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

              {/* Todo (deferring for higher priorities)
              - Usability issue with hidden scrollable content
              - Bug when resizing timeline does not expand to fill space, when on 'present'
              - Bug (unable to recreate) timeline content disappears */}

              <div className="events-content">
                <ol>
                  <li className="selected" data-date="1/1/2004">
                    <h4>Ecom Bcom</h4>
                    <em>2002 - 2004</em>
                    <div className="row">
                      <div className="col-lg-8 offset-lg-2 pl-0">
                        <p>
                          Oversaw all aspects of design and development for two
                          catalog websites for travel accessories and gift
                          baskets, contributing to record sales by the end of
                          his tenure.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li data-date="1/1/2005">
                    <h4>Freelance + .NET classes</h4>
                    <em>2004 - 2005</em>
                    <div className="row">
                      <div className="col-lg-8 offset-lg-2 pl-0">
                        <p>
                          Acted as a stop gap for Ogilvy, Eloqua and N49,
                          developing banner ads, HTML emails and microsites,
                          during the day, and at night attended .NET application
                          development courses.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li data-date="1/1/2015">
                    <h4>Splash Interactive</h4>
                    <em>2005 - 2015</em>
                    <div className="row">
                      <div className="col-12 col-lg-6 pl-0">
                        <p>
                          Front end developer + project coordinator (but this
                          came later), provided support and training for clients
                          and supporting third party vendors.
                        </p>
                        <p>
                          Development consisted (mostly) of hand coding website
                          interfaces (HTML, CSS and a little JavaScript), HTML
                          emails, Flash, audio and video editing, epubs,
                          estimating timelines and working closely with
                          designers, providing technical guidance and best
                          options.
                        </p>
                      </div>
                      <div className="col-12 col-lg-6 pl-0 pl-lg-3">
                        <p>
                          Coordinating involved, but not limited to, tracking
                          all project details, adhering to timelines, liasing
                          with clients and supporting backend developers, with
                          QA, art direction and usability, for desktop, mobile
                          and application development.
                        </p>
                        <p>
                          <span className="font-weight-bold">
                            Splash Interactive
                          </span>{" "}
                          provides digital and creative solutions to Fortune 500
                          companies, philanthropic organizations, and some of
                          North America's top advertising agencies.
                        </p>
                      </div>
                      <div className="col-12 pl-0 pt-lg-5">
                        <p className="font-weight-bold">
                          Below is a sampling of some direct client websites
                          during this period. It is not a complete list.
                        </p>
                        <p className="text-secondary">Screenshots coming!</p>
                      </div>
                    </div>
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
                          <a
                            href="https://www.pingtu.ca/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Pingtu
                          </a>
                          <br />
                          <a
                            href="http://www.ripplepublishing.ca/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Ripple Digital Publishing
                          </a>
                          <br />
                          <a
                            href="https://nextsentence.ca/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Next Sentence
                          </a>
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
                    <div className="row">
                      <div className="col-lg-8 offset-lg-2 pl-0">
                        <p>
                          The front end role here was divided into fullstack
                          Wordpress development (backend was new to me) and
                          supporting a fortune 500 client website - implementing
                          and debugging GEO specific content.
                        </p>
                        <p>
                          The later demanded organization, being detailed and
                          communication at the highest level (managing up to
                          100+ tickets for product releases) coordinating with
                          several offsite teams, for quality assurance,
                          translations, direction from client leads and all the
                          communication with teams for tickets in flight.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li data-date="1/1/2020">
                    <h4>Wave Financial</h4>
                    <em>2016 - 2020</em>
                    <div className="row">
                      <div className="col-lg-8 offset-lg-2 pl-0">
                        <p>
                          Initially contributed to an inhouse styles framework,
                          developing HTML/CSS and a little JavaScript, for their
                          public facing website, that was tied into their
                          application framework, with Django and Python.
                        </p>
                        <p>
                          Later migrated to Craft CMS and Bootstrap, to increase
                          the pace of delivery, to meet the significant needs of
                          Marketing. This developed knowledge in "systems
                          thinking" and fullstack development with Craft &mdash;
                          in addition to A/B testing, modern SEO practices, site
                          speed optimizations (although, I was a passenger here)
                          and object based JavaScript.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li data-date="1/1/2021">
                    <h4>Present</h4>
                    <div className="row">
                      <div className="col-12 col-lg-8 offset-lg-2 pl-0">
                        <p>
                          Focused, hungry and curious about all things
                          JavaScript, driven to become a specialist.
                        </p>
                      </div>
                    </div>
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

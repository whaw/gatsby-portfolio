// Sourced: https://codepen.io/acxix92/pen/yzOazE

import React, { useEffect } from "react"
import "./Timeline.css" // resolved navigation bug
import initiateTimeline from "./Timeline-script" // cleared some minor compilation errors. "Warnings" TBA

const Timeline = () => {
  useEffect(() => {
    initiateTimeline()
  }, [])
  return (
    <>
      <div className="container">
        <div className="row px-xl-15">
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
                          2004-05
                        </a>
                      </li>
                      <li>
                        <a href="#0" data-date="1/1/2006" className="small">
                          2005-15
                        </a>
                      </li>
                      <li>
                        <a href="#0" data-date="1/1/2016" className="small">
                          2015-16
                        </a>
                      </li>
                      <li>
                        <a href="#0" data-date="1/1/2017" className="small">
                          2016-20
                        </a>
                      </li>
                      <li>
                        <a href="#0" data-date="1/1/2021" className="small">
                          2021-22
                        </a>
                      </li>
                      <li>
                        <a href="#0" data-date="1/1/2022" className="small">
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
                    <h5>Ecom Bcom</h5>
                    <em>2002 - 2004</em>
                    <div className="row">
                      <div className="col-lg-8 offset-lg-2 pl-0">
                        <p>
                          Oversaw all aspects of design and development for two
                          catalog websites for travel accessories and gift
                          baskets, contributing to record sales by the end of
                          his tenure.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li data-date="1/1/2005">
                    <h5>Freelance + .NET classes</h5>
                    <em>2004 - 2005</em>
                    <div className="row">
                      <div className="col-lg-8 offset-lg-2 pl-0">
                        <p>
                          Acted as a stop gap for Ogilvy, Eloqua and N49
                          development needs, for banner ads, HTML emails and
                          microsites, during the day, and at night attended .NET
                          application development courses.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li data-date="1/1/2006">
                    <h5>Splash Interactive</h5>
                    <em>2005 - 2015</em>
                    <div className="row">
                      <div className="col-12 col-lg-6 pl-0">
                        <p>
                          Front-end developer + project coordinator (but this
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
                    </div>
                  </li>
                  <li data-date="1/1/2016">
                    <h5>Forge Media</h5>
                    <em>2015 - 2016</em>
                    <div className="row">
                      <div className="col-lg-8 offset-lg-2 pl-0">
                        <p>
                          The front-end role here was divided into fullstack
                          Wordpress development (backend was new to me) and
                          supporting a fortune 500 company website, implementing
                          and debugging GEO specific content.
                        </p>
                        <p>
                          The later pushed the limits of working quickly and
                          accurately, communication and required advanced
                          abilities in debugging and creativity in code, for at
                          times 100+ tickets, between several remote teams, for
                          the cutting edge content, layouts and delivery
                          methods.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li data-date="1/1/2017">
                    <h5>Wave Financial</h5>
                    <em>2016 - 2020</em>
                    <div className="row">
                      <div className="col-lg-8 offset-lg-2 pl-0">
                        <p>
                          Contributed to and maintained an in-house styles and
                          components library, developing in HTML/CSS and a
                          little JavaScript, for their public facing website,
                          shared with their application framework, in Django and
                          Python.
                        </p>
                        <p>
                          Later migrated the "public site" to Craft CMS and
                          Bootstrap to meet the rapidly growing needs of
                          Marketing. This developed knowledge in "systems
                          thinking" and fullstack development with Craft, in
                          addition to A/B testing, user analytics tools and
                          modern SEO practices.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li data-date="1/1/2021">
                    <h5>Innocean Canada</h5>
                    <em>2021 - 2022</em>
                    <div className="row">
                      <div className="col-lg-8 offset-lg-2 pl-0">
                        <p>
                          Member of the digital devliery team for Innocean, a
                          global full service advertising agency, supporting
                          marketing verticals with (but not limited to) advanced
                          email development, dynamic banners and lead ads for
                          the automotive industry, as well as providing
                          guidance, solutions and best options, for fellow
                          developers and non-technical colleagues, to clear
                          project blockers, across teams and departments.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li data-date="1/1/2022">
                    <h5>Present</h5>
                    <div className="row">
                      <div className="col-12 col-lg-8 offset-lg-2 pl-0">
                        <p>
                          Focused, hungry and driven for all things JavaScript.
                          Seeking a company that highly value their people,
                          professional growth and the end user experience, with
                          a shared excitement and appreciation for what they do
                          and for those around them.
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
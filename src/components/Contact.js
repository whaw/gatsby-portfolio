import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Contact = () => (
  <section id="contact" className="py-5">
    <div className="container section__header">
      <div className="row">
        <div className="col text-center">
          <h2>Contact</h2>
          <h3 className="text-secondary">
            Give me a shout. Always happy to chat.
          </h3>

          <StaticImage
            src="../images/contact.gif"
            className="mt-5"
            alt="contact info"
          />
        </div>
      </div>
    </div>
  </section>
)

export default Contact

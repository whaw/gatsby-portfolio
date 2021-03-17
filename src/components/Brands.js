import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Brands = () => (
  <section id="clients" className="clients">
    <div className="container section__header">
      <div className="row">
        <div className="col text-center">
          <h2>Some Brands</h2>
          <h3 className="text-secondary">
            I have had the privilege to contribute
          </h3>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-3 col-sm-2 col-xl-1 p-4 p-md-5 p-xl-3">
          <StaticImage
            src="../images/companies/knorr.svg"
            className="w-100"
            placeholder="TRACED_SVG"
            alt="Knorr"
          />
        </div>
        <div className="col-3 col-sm-2 col-xl-1 p-4 p-md-5 p-xl-3">
          <StaticImage
            src="../images/companies/apple.svg"
            className="mx-2"
            placeholder="TRACED_SVG"
            alt="Apple"
          />
        </div>
        <div className="col-3 col-sm-2 col-xl-1 p-4 p-md-5 p-xl-3">
          <StaticImage
            src="../images/companies/canadaPost.svg"
            className="mx-2"
            placeholder="TRACED_SVG"
            alt="Canada Post"
          />
        </div>
        <div className="col-3 col-sm-2 col-xl-1 p-4 p-md-5 p-xl-3">
          <StaticImage
            src="../images/companies/ADDB.svg"
            className="w-100"
            placeholder="TRACED_SVG"
            alt="Anderson DDB"
          />
        </div>
        <div className="col-3 col-sm-2 col-xl-1 p-4 p-md-5 p-xl-3">
          <StaticImage
            src="../images/companies/marvel.svg"
            className="w-100"
            placeholder="TRACED_SVG"
            alt="Marvel Comics"
          />
        </div>
        <div className="col-3 col-sm-2 col-xl-1 p-4 p-md-5 p-xl-3">
          <StaticImage
            src="../images/companies/johnsonAndJohnson.svg"
            className="w-100"
            placeholder="TRACED_SVG"
            alt="Johnson and Johnson"
          />
        </div>
        <div className="col-3 col-sm-2 col-xl-1 p-4 p-md-5 p-xl-3">
          <StaticImage
            src="../images/companies/yorkU.png"
            className="w-100"
            placeholder="TRACED_SVG"
            alt="York University"
          />
        </div>
        <div className="col-3 col-sm-2 col-xl-1 p-4 p-md-5 p-xl-3">
          <StaticImage
            src="../images/companies/peller.png"
            className="w-100"
            placeholder="TRACED_SVG"
            alt="Peller Estates"
          />
        </div>
        <div className="col-3 col-sm-2 col-xl-1 p-4 p-md-5 p-xl-3">
          <StaticImage
            src="../images/companies/trius.png"
            className="w-100"
            placeholder="TRACED_SVG"
            alt="Trius Winery"
          />
        </div>
        <div className="col-3 col-sm-2 col-xl-1 p-4 p-md-5 p-xl-3">
          <StaticImage
            src="../images/companies/thirtybench.png"
            className="w-100"
            placeholder="TRACED_SVG"
            alt="Thirty Bench Winery"
          />
        </div>
        <div className="col-3 col-sm-2 col-xl-1 p-4 p-md-5 p-xl-3">
          <StaticImage
            src="../images/companies/gretzky.png"
            className="w-100"
            placeholder="TRACED_SVG"
            alt="Wayne Gretzky Estates"
          />
        </div>
      </div>
    </div>
  </section>
)

export default Brands

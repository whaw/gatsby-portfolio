import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Brands = () => (
  <>
    <div className="container">
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
  </>
)

export default Brands

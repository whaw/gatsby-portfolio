import React from "react"
import Image from "./BrandImage"

const brandImages = require("/src/data/brandImages")

const Brands = () => (
  <>
    <div className="container">
      <div className="row d-none d-md-flex align-items-center justify-content-between px-xl-15 mx-xl-10 pt-9">
        {brandImages.map((image) => {
          return (
            <div className="col-2 col-sm-1" key={image.alt}>
              <Image
                src={image.image}
                className={image.className}
                alt={image.alt}
              />
            </div>
          )
        })}
      </div>
      <p className="d-none d-md-block small text-center text-secondary pt-2">
        Some brands of which I have had the privilege to contribute.
      </p>
    </div>
  </>
)

export default Brands

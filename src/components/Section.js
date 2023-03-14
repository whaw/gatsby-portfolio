import React from 'react'

const Section = ({ header, subHeader, sectionId, sectionClass = "", children }) => {
  return (
    <section id={sectionId} className={sectionClass}>
      <div className="container section__header gs_reveal">
        <div className="row">
          <div className="col text-center">
            <h2>{header}</h2>
            <h3 className="text-secondary">{subHeader}</h3>
          </div>
        </div>
      </div>
      {children}
    </section>
  )
}

export default Section
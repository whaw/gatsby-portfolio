import React from 'react'

const SectionHeader = ({ header, subHeader }) => {
  return (
    <div className="container section__header gs_reveal">
      <div className="row">
        <div className="col text-center">
          <h2>{header}</h2>
          <h3 className="text-secondary">{subHeader}</h3>
        </div>
      </div>
    </div>
  )
}

export default SectionHeader
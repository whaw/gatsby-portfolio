import React from 'react'
import SectionHeader from './SectionHeader'

const Section = ({ header, subHeader, sectionId, sectionClass = "", children }) => {
  return (
    <section id={sectionId} className={sectionClass}>
      <SectionHeader header={header} subHeader={subHeader} />
      {children}
    </section>
  )
}

export default Section
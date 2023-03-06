import React from 'react'
import experienceData from '../../data/experience'

const Timeline2 = () => {
  const experience =
    experienceData.map(({ company, period, copy }, i) => {
      const colPosClass = i % 2 === 0 ? 'left' : 'right'
      return (
        <div key={company} className={`container position-relative gs_reveal ${colPosClass}`}>
          <div className="content">
            <h5>{company}</h5>
            <p className="text-secondary">{period}</p>
            <span dangerouslySetInnerHTML={{ __html: copy }} />
          </div>
        </div>
      )
    })

  return (
    <div className="timeline position-relative">
      {experience}
    </div>
  )
}

export default Timeline2
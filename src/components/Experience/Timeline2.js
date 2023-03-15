import React from 'react'
import experienceJson from '../../data/experience'

const Timeline2 = () => {
  const experience =
    experienceJson.map(({ company, period, copy }, i) => {
      const colPosClass = i % 2 === 0 ? 'left' : 'right'
      return (
        <div key={company} className={`timeline__container position-relative gs_reveal ${colPosClass}`}>
          <div className="content">
            <div role="heading" aria-level="5" className="h5">{company}</div>
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
import React from 'react'
import experiences from '../../data/experiences'

const Timeline2 = () => {
  return (
    <div className="timeline position-relative">
      {experiences.map((experience, i) => {
        const colPosClass = i % 2 == 0 ? 'left' : 'right'
        return (
          <div className={`container position-relative ${colPosClass}`}>
            <div className="content">
              <h5>{experience.company}</h5>
              <p className="text-secondary">{experience.period}</p>
              <span dangerouslySetInnerHTML={{ __html: experience.copy }} />
            </div>
          </div>
        )
      })}
    </div >
  )
}

export default Timeline2
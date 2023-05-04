import React from 'react'

const Stats = () => {
  const statsJson = [
    { id: 1, value: 15, unit: "YRS", text: "Front-end development" },
    { id: 2, value: 11, unit: "YRS", text: "Agency experience" },
    { id: 3, value: 7, unit: "YRS", text: "Email development" },
    { id: 4, value: 8, unit: "YRS", text: "CMS development" }
  ]
  return (
    <div className="stats container d-none d-lg-block gs_reveal">
      <div className="row">
        {statsJson.map(({ id, value, unit, text }) =>
          <div key={id} className="col-3 text-center">
            <div className="text-left mx-auto d-lg-inline-block">
              <div className="display-2 stat text-secondary d-inline">{value}</div>&nbsp;
              <div className="stat_unit d-inline">{unit}</div><br />
              <small className="pl-2">{text}</small>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Stats
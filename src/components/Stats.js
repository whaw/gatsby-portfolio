import React from 'react'

const Stats = () => {
  return (
    <div className="stats container d-none d-lg-block">
      <div className="row">
        <div className="col-3 text-center gs_reveal">
          <div className="text-left mx-auto d-lg-inline-block">
            <div className="display-2 stat text-secondary d-inline">15</div>&nbsp;
            <div className="stat_unit d-inline">YRS</div><br />
            <small className="pl-2">Front-end development</small>
          </div>
        </div>
        <div className="col-3 text-center gs_reveal">
          <div className="text-left mx-auto d-lg-inline-block">
            <div className="display-2 stat text-secondary d-inline">11</div>&nbsp;
            <div className="d-inline">YRS</div><br />
            <small className="pl-2">Agency experience</small>
          </div>
        </div>
        <div className="col-3 text-center gs_reveal">
          <div className="text-left mx-auto d-lg-inline-block">
            <div className="display-2 stat text-secondary d-inline">7</div>&nbsp;
            <div className="d-inline">YRS</div><br />
            <small className="pl-2">Email development</small>
          </div>
        </div>
        <div className="col-3 text-center gs_reveal">
          <div className="text-left mx-auto d-lg-inline-block">
            <div className="display-2 stat text-secondary d-inline">8</div>&nbsp;
            <div className="d-inline">YRS</div><br />
            <small className="pl-2">CMS development</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
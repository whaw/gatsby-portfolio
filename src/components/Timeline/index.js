import React from "react";
import timeline from "./timeline.json";
import DOMPurify from "dompurify";

const TimelineItem = ({ company, period, copy, colPos }) => {
  return (
    <div key={company} className={`timeline__container position-relative gs_reveal mt-lg-2 ${colPos}`}>
      <div className="content">
        <h5>{company}</h5>
        <p className="text-secondary">{period}</p>
        <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(copy) }} />
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="timeline position-relative">
            {timeline.map(({ company, period, copy }, i) => {
              const colPos = i % 2 === 0 ? "left" : "right";
              return (
                <TimelineItem
                  key={company}
                  company={company}
                  period={period}
                  copy={copy}
                  colPos={colPos}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline;
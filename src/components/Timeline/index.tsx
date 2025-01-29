import React from "react";
import timelineData from "./timeline.json";
import sanitizeCopy from "../../utils/sanitizeCopy";

type TimelineItemProps = {
  company: string,
  period: string,
  copy: string,
  colPos: string,
}

const TimelineItem = ({ company, period, copy, colPos }: TimelineItemProps) => {
  return (
    <div className={`timeline__container position-relative gs_reveal mt-lg-2 ${colPos}`}>
      <div className="content">
        <h5>{company}</h5>
        <p className="text-secondary">{period}</p>
        <span dangerouslySetInnerHTML={sanitizeCopy(copy)} />
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
            {timelineData.map(({ company, period, copy }, i) => {
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
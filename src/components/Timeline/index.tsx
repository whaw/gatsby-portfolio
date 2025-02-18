// Timeline

import React from "react";
import timelineData from "./timeline.json";
import sanitizeCopy from "../../utils/sanitizeCopy";

type TimelineItemProps = {
  company: string;
  period: string;
  copy: string;
  colPos: "left" | "right";
}

const TimelineItem = ({ company, period, copy, colPos }: TimelineItemProps) => {
  return (
    <div className={`timeline__container position-relative gs_reveal mt-lg-2 ${colPos}`}>
      <div className="content">
        <h5>{company}</h5>
        <p className="text-secondary">{period}</p>
        <span dangerouslySetInnerHTML={{__html: sanitizeCopy(copy)}} />
      </div>
    </div>
  );
};

const Timeline = () => {
  const getColPos = (i: number) => i % 2 === 0 ? "left" : "right";

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="timeline position-relative">
            {timelineData.map(({ company, period, copy }, i) => {
              return (
                <TimelineItem
                  key={company}
                  company={company}
                  period={period}
                  copy={copy}
                  colPos={getColPos(i)}
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
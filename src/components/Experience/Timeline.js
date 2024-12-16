import React from "react";
import timeline from "./timeline.json";
import DOMPurify from "dompurify";
import * as styles from "./Timeline.module.scss";

const Timeline = () => {
  const position =
    timeline.map(({ company, period, copy }, i) => {
      const colPosClass = i % 2 !== 0 && styles.right;

      return (
        <div key={company} className={`${styles.timeline__container} position-relative gs_reveal mt-lg-2 ${colPosClass}`}>
          <div className="content">
            <div role="heading" aria-level="5" className="h5">{company}</div>
            <p className="text-secondary">{period}</p>
            <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(copy) }} />
          </div>
        </div>
      )
    });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className={`${styles.timeline} position-relative`}>
            {position}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline;
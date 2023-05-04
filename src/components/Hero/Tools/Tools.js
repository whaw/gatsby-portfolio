import React from "react"
import Tool from "./Tool"

const Tools = ({ toolAnimDetails }) => {
  return toolAnimDetails[0].images.map(({ selector, name, description, experience, image }) =>
    <Tool
      selector={selector}
      name={name}
      description={description}
      experience={experience}
      key={image}
    />)
}

export default Tools


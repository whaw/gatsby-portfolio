import React from "react"
import Tool from "./Tool"

const Tools = ({ toolAnimDetails }) => {

  const toolIcons = toolAnimDetails[0].images.map(({ selector, name, description, status, image }) =>
    <Tool
      selector={selector}
      name={name}
      description={description}
      status={status}
      key={image}
    />)

  return toolIcons
}

export default Tools


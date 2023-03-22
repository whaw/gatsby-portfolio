import React from "react"
import Tool from "./Tool"

const Tools = ({ toolAnimDetails }) => {
  return toolAnimDetails[0].images.map((props) =>
    <Tool
      selector={props.selector}
      name={props.name}
      description={props.description}
      status={props.status}
      key={props.image}
    />)
}

export default Tools


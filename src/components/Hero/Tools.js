import React from "react";
import Tool from "./Tool";

const Tools = ({ toolAnimDetails }) => {
  return toolAnimDetails[0].images.map(({ selector, name, description, image }) =>
    <Tool
      selector={selector}
      name={name}
      description={description}
      key={image}
    />)
}

export default Tools;


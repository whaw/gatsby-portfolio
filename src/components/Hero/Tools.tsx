import React from "react";
import Tool from "./Tool";

interface ToolProp {
  selector: string,
  name: string,
  description: string,
  image: string,
}

interface ToolsProp {
  toolAnimDetails: {
    selector: string,
    delay: number,
    groupElementDelay: number,
    images: ToolProp[],
  }[];
}

const Tools = ({ toolAnimDetails }: ToolsProp) => {
  const images = toolAnimDetails.length > 0 ? toolAnimDetails[0].images: [];

  return images.map(({ selector, name, description, image }: ToolProp) =>
    <Tool
      selector={selector}
      name={name}
      description={description}
      key={image}
    />)
}

export default Tools;


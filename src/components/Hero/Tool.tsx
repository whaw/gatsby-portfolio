import React, { useState } from "react";
import ToolImage from "./ToolImage";
import ToolDescription from "./ToolDescription";

interface ToolProps {
  selector: string;
  name: string;
  description: string;
}

const Tool = ({ selector, name, description }: ToolProps) => {
  const toolClassName = name.toLowerCase();
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handleOnMouseEvent = () => {
    setIsDescriptionOpen(prevState => !prevState);
  }

  return (
    <div className={`position-absolute hero__tool js_tool hero__${toolClassName} ${selector}`} >
      <button
        onMouseEnter={handleOnMouseEvent}
        onMouseLeave={handleOnMouseEvent}
        className={`border-0 p-0 bg-transparent hero__${toolClassName}__button`}>
        <ToolImage name={name} />
      </button>
      <ToolDescription
        name={name}
        description={description}
        isOpen={isDescriptionOpen}
      />
    </div>
  )
}

export default Tool

import React, { useState, useRef, useEffect } from "react"
import ToolImage from "./ToolImage"
import ToolDescription from "./ToolDescription"
import $ from "jquery"

const Tool = ({ selector, name, description, status }) => {
  const toolClassName = name.toLowerCase()
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
  const toolRef = useRef(null)

  useEffect(() => {
    const thisTool = $(toolRef.current)
    if (!!thisTool) thisTool.on("mouseover mouseout focus focusout", handleOnMouseEvent)
    return () => thisTool.unbind()
  })

  const handleOnMouseEvent = () => setIsDescriptionOpen(!isDescriptionOpen)

  return (
    <div
      className={`position-absolute hero__tool js_tool hero__${toolClassName} ${selector}`}
    >
      <button
        ref={toolRef}
        className={`border-0 p-0 bg-transparent hero__${toolClassName}__button`}
      >
        <ToolImage selector={selector} alt={name} />
      </button>
      <ToolDescription
        name={name}
        description={description}
        status={status}
        isOpen={isDescriptionOpen}
      />
    </div>
  )
}

export default Tool

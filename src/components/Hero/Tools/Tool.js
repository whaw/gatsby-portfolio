import React, { useState, useRef, useEffect } from "react"
import ToolImage from "./ToolImage"
import ToolDescription from "./ToolDescription"
import $ from "jquery"

const Tool = ({ selector, name, description, status }) => {
  const cssSelector = name.toLowerCase()
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
  const toolRef = useRef(null)

  useEffect(() => {
    const currentTool = $(toolRef.current)
    if (!!currentTool) currentTool.on("mouseover mouseout", handleOnMouseEvent)
    return () => currentTool.unbind()
  })

  const handleOnMouseEvent = () => setIsDescriptionOpen(!isDescriptionOpen)

  return (
    <div
      className={`position-absolute hero__tool js_tool hero__${cssSelector} ${selector}`}
    >
      <button
        ref={toolRef}
        className={`border-0 p-0 bg-transparent hero__${cssSelector}__button`}
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

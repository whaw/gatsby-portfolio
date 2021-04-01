import React, { useState, useRef, useEffect } from "react"
import Image from "./ToolImage"
import ToolDescription from "./ToolDescription"
import $ from "jquery"

const Tool = props => {
  const cssSelector = props.name.toLowerCase()
  const [asideOpen, setAsideOpen] = useState(false)
  const toolRef = useRef()

  useEffect(() => {
    if (toolRef && toolRef.current) {
      const currentTool = $(toolRef.current)
      currentTool.on("mouseover mouseout", handleOnMouseEvent)
    }
  })

  const handleOnMouseEvent = e => {
    const newState = !asideOpen
    setAsideOpen(newState)
  }

  return (
    <div
      className={`position-absolute hero__tool js_tool hero__${cssSelector} ${props.selector}`}
    >
      <button
        ref={toolRef}
        className={`border-0 p-0 bg-transparent hero__${cssSelector}__button`}
      >
        <Image selector={props.selector} alt={props.name} />
      </button>
      <ToolDescription
        name={props.name}
        description={props.description}
        status={props.status}
        isOpen={asideOpen}
      />
    </div>
  )
}

export default Tool

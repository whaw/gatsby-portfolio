import React, { useState, useRef, useEffect } from "react"
import Image from "./ToolImage"
import ToolDescription from "./ToolDescription"
import $ from "jquery"

interface Props {
  selector: string
  name: string
  description: string
  status: string
}

const Tool = (props: Props) => {
  const cssSelector = props.name.toLowerCase()
  const [asideOpen, setAsideOpen] = useState(false)
  const toolRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (toolRef.current !== null) {
      const currentTool = $(toolRef.current)
      currentTool.on("mouseover mouseout", handleOnMouseEvent)
    }
  })

  const handleOnMouseEvent = () => {
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

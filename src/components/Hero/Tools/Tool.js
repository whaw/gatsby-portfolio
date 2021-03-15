import React, { useState } from "react"
import Image from "./ToolImage"
import ToolDescription from "./ToolAside"

const Tool = props => {
  const cssSelector = props.name.toLowerCase()
  const [asideOpen, setAsideOpen] = useState(false)

  const handleOnMouseOver = e => {
    setAsideOpen(true)
  }

  const handleOnMouseOut = e => {
    setAsideOpen(false)
  }

  return (
    <>
      <button
        onMouseOver={handleOnMouseOver}
        onFocus={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
        onBlur={handleOnMouseOut}
        className={`position-absolute border-0 p-0 bg-transparent hero__tool js_tool hero__${cssSelector} ${props.selector}`}
      >
        <Image selector={props.selector} alt={props.name} />
        <ToolDescription
          name={props.name}
          description={props.description}
          status={props.status}
          isOpen={asideOpen}
        />
      </button>
    </>
  )
}

export default Tool

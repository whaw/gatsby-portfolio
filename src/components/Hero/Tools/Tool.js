import React, { useState } from "react"
import Image from "./ToolImage"
import ToolDescription from "./ToolDescription"

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
    <div
      onMouseOver={handleOnMouseOver}
      onFocus={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
      onBlur={handleOnMouseOut}
      className={`position-absolute hero__tool js_tool hero__${cssSelector} ${props.selector}`}
    >
      <button
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

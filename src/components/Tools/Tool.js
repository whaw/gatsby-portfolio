import React, { useEffect } from "react"
import Image from "../Image"
import $ from "jquery"

const Tool = props => {
  useEffect(() => {
    bindEvents()
  })

  const bindEvents = () => {
    $(document).on("js_tool_animClassAdded", e => checkHasAnimClass())
  }

  const checkHasAnimClass = () => {
    console.log("added")
  }

  return (
    <div
      style={{
        width: props.width,
        top: `${props.top}%`,
        left: `${props.left}%`,
      }}
      className={`position-absolute hero__tool js_tool ${props.selector}`}
    >
      <Image filename={props.filename} alt={props.alt} />
    </div>
  )
}

export default Tool

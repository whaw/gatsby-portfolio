import React, { useEffect } from "react"
import Image from "./ToolImage"
import $ from "jquery"

const Tool = props => {
  useEffect(() => {
    bindEvents()
  })

  const bindEvents = () => {
    $(document).on("js_tool_animClassAdded", e => checkHasAnimClass())
  }

  const checkHasAnimClass = () => {
    // how to detect class being added
    // to write animation in tools.js
    // trying to add trigger to animations.js
    // add play state to parent/Hero.js ?
    console.log("added")
  }

  return (
    <Image
      selector={props.selector}
      alt={props.alt}
      className={`position-absolute hero__tool js_tool ${props.selector}`}
    />
  )
}

export default Tool

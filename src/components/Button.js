import React from "react"

const Button = ({ onClick, children = "Uh oh! Forgot the text", classes = "" }) => {
  return <button
    onClick={onClick}
    className={`btn ${classes}`}
  >{children}</button>
}

export default Button

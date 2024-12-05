import React from "react"

const Button = ({ onClick, children = "Uh oh! Forgot the text", classes = "", ...props }) => {
  return <button
    onClick={onClick}
    className={`btn ${classes}`}
    {...props}
  >{children}</button>
}

export default Button

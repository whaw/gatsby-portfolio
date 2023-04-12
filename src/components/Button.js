import React from "react"

const Button = ({ label = "Uh oh! Forgot the text", classes = "", method = null }) => {
  return <button
    onClick={() => method !== null ? method() : false}
    className={`btn ${classes}`}
  >{label}</button>
}

export default Button

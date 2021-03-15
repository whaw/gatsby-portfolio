import React from "react"

const ToolAside = props => {
  return (
    <aside
      className={`hero__tool__aside border bg-white text-left small mt-2 ${
        props.isOpen ? "animate p-2" : ""
      }`}
    >
      <h6>{props.name}</h6>

      <p>{props.description}</p>
      <p>
        <strong>Status:</strong> {props.status}
      </p>
    </aside>
  )
}

export default ToolAside

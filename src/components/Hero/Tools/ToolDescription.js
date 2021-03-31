import React from "react"

const ToolDescription = props => {
  return (
    <aside
      className={`hero__tool__aside border bg-white text-left small mt-2 ${
        props.isOpen ? "animate pt-3 px-2" : ""
      }`}
    >
      <h6>{props.name}</h6>
      <p>{props.description}</p>
      <p>
        <span className="font-weight-bold">Development status:</span>{" "}
        {props.status}
      </p>
    </aside>
  )
}

export default ToolDescription

import React from "react"

const ToolAside = props => {
  return (
    <aside
      className={`hero__tool__aside border bg-white text-left small mt-2 ${
        props.isOpen ? "animate p-2" : ""
      }`}
    >
      <h6>
        {props.name} - <span className="small">{props.status}</span>
      </h6>
      <p>{props.description}</p>
    </aside>
  )
}

export default ToolAside

import React from "react"

const ToolDescription = ({ name, description, status, isOpen }) => {
  return (
    <aside
      className={`hero__tool__aside border bg-white text-left small mt-2 ${isOpen ? "animate pt-3 px-2" : ""
        }`}
    >
      <h6>{name}</h6>
      <p>{description}</p>
      <p>
        <span className="font-weight-bold">Status:</span>{" "}
        {status}
      </p>
    </aside>
  )
}

export default ToolDescription

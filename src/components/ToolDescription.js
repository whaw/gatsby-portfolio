import React from "react"

const ToolDescription = ({ name, description, experience, isOpen }) => {
  return (
    <aside className={`hero__tool__aside border bg-white text-left small mt-2 ${isOpen && "animate pt-3 px-2"}`}>
      <div role="heading" aria-level="6" className="h6">{name}</div>
      <p>{description}</p>
    </aside>
  )
}
export default ToolDescription

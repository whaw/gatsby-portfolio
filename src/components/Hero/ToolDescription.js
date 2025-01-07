import React from "react";

const ToolDescription = ({ name, description, isOpen }) => {
  return (
    <aside className={`hero__tool__aside border bg-white text-left small mt-2 ${isOpen && "animate pt-3 px-2"}`}>
      <h6 className="h6">{name}</h6>
      <p>{description}</p>
    </aside>
  )
}
export default ToolDescription;

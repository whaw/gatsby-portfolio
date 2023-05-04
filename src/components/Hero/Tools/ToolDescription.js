import React from "react"
import DOMPurify from "dompurify"

const ToolDescription = ({ name, description, experience, isOpen }) => {
  return (
    <aside className={`hero__tool__aside border bg-white text-left small mt-2 ${isOpen && "animate pt-3 px-2"}`}>
      <div role="heading" aria-level="6" className="h6">{name}</div>
      <p>{description}</p>
      <p><span className="font-weight-bold">Experience:</span> <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(experience) }} /></p>
    </aside>
  )
}
export default ToolDescription

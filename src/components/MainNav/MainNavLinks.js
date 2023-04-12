import React from "react"
import { BrowserRouter } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

const MainNavLinks = () => {
  const links = [
    { label: "Introductions", to: "#introductions" },
    { label: "About this site", to: "#about-this-site" },
    { label: "Experience", to: "#experience" },
    { label: "Contact", to: "#contact" }
  ]

  return (
    <BrowserRouter>
      <ul id="main-nav-links" className="nav navbar-nav mr-auto">
        {links.map(({ label, to }) => (
          <li key={to} className="nav-item">
            <HashLink className="nav-link" to={to} smooth>{label}</HashLink>
          </li>
        ))}
      </ul>
    </BrowserRouter>
  )
}

export default MainNavLinks
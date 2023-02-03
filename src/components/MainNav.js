import React from "react"

const MainNav = () => {
  const navLinks = [
    { label: "Introductions", to: "#introductions" },
    { label: "About this site", to: "#about-this-site" },
    { label: "Experience", to: "#experience" },
    { label: "Contact", to: "#contact" }
  ]

  return (
    <>
      <nav className="navbar navbar-expand-lg container navbar__container navbar-light bg-white justify-content-between fixed-top pt-lg-3">
        <a className="navbar-brand js_logo pb-0" href="#home">
          <span className="logo mb-2 d-block">A Working Copy</span>
          William Haw &mdash; Front-End Developer
          <span className="d-none d-md-inline-block">
            , Outdoor Enthusiast
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarSupportedContent"
        >
          <ul id="main-nav" className="nav navbar-nav mr-auto">
            {navLinks.map((link, i) => (
              <li key={link.to} className="nav-item">
                <a className="nav-link" href={link.to}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default MainNav

import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const MainNav = () => {
  const navLinks = [
    { label: "Skills", to: "#skills" },
    { label: "About this site", to: "#about-this-site" },
    { label: "Introductions", to: "#introductions" },
    { label: "Contact", to: "#contact" },
  ]

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        id="navbar"
        className="navbar navbar-expand-lg fixed-top navbar-light bg-white"
      >
        <div className="container navbar__container py-2">
          <Navbar.Brand href="#home" className="js_logo">
            <span className="logo mb-2 d-inline-block">
              whaw <span className="small">/</span>
            </span>
            <br className="d-none d-lg-block" />
            Front end developer
            <span className="d-none d-md-inline-block">
              , user advocate, motorcycle enthusiast
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              {navLinks.map(link => (
                <Nav.Link key={link.to} className="nav-item" href={link.to}>
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
}

export default MainNav

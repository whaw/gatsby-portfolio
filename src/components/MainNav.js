import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const MainNav = () => {
  const navLinks = [
    { label: "Skills", to: "#skills" },
    { label: "Clients", to: "#clients" },
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
            <span className="logo mb-2 d-inline-block">Will H/</span>
            <br className="d-none d-lg-block" />
            Front End Developer
            <span className="d-none d-md-inline-block">
              , User Advocate, Outdoor Enthusiast
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              {navLinks.map(link => (
                <Nav.Link
                  key={link.to}
                  className="nav-item nav-link"
                  href={link.to}
                >
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

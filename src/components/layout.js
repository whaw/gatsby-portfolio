import React from "react"
import Helmet from "react-helmet"

import Hero from "./Hero"
import MainNav from "./MainNav"
import Skills from "./Skills"
import Brands from "./Brands"
import Introductions from "./Introductions"
import AboutSite from "./AboutSite"
import Contact from "./Contact"

const Layout = () => (
  <>
    <Helmet>
      <meta name="googlebot" content="noindex" />
      <title>whaw /</title>
      <body
        data-spy="scroll"
        data-bs-target="#navbar"
        id="home"
        className="px-md-3 pt-11"
      />
    </Helmet>
    <header className="header">
      <MainNav />
      <Hero />
    </header>
    <main>
      <Skills />
      <Brands />
      <AboutSite />
      <Introductions />
      <Contact />
      <a href="#home" className="btn btn-secondary top-btn">
        Top
      </a>
    </main>
    <footer className="border-top pt-2 pb-5 pl-3 text-secondary small">
      &copy; {new Date().getFullYear()}
    </footer>
  </>
)

export default Layout

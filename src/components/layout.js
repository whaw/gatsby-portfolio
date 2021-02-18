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
      <title>Cool</title>
      <body
        data-spy="scroll"
        data-bs-target="#navbar"
        id="home"
        className="px-md-3 pt-11"
      />
    </Helmet>
    <header>
      <MainNav />
      <Hero />
    </header>
    <main>
      <Skills />
      <Brands />
      <AboutSite />
      <Introductions />
      <Contact />
    </main>
    <footer className="border-top pt-2 pb-5 pl-3 text-secondary small">
      &copy; {new Date().getFullYear()}
    </footer>
  </>
)

export default Layout

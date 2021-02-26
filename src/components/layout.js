/* boiler */
import React from "react"
import Helmet from "react-helmet"

/* components */
import MainNav from "./MainNav"
import Hero from "./Hero"
import Skills from "./Skills"
import Brands from "./Brands"
import Introductions from "./Introductions"
import AboutSite from "./AboutSite"
import Contact from "./Contact"
import TopButton from "./TopButton"

const Layout = () => (
  <>
    <Helmet>
      <title>A Working Copy</title>
      <meta name="googlebot" content="noindex" />
      {/* Structured Data is omitted for SEO, given the temperoray nature of the site */}
      <body
        data-spy="scroll"
        data-bs-target="#navbar"
        id="home"
        className="px-md-3 pt-12"
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
      <TopButton />
    </main>
    <footer className="border-top pt-2 pb-5 pl-3 text-secondary small">
      &copy; {new Date().getFullYear()}
    </footer>
  </>
)

export default Layout

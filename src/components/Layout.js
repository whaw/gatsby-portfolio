import React from "react"
import Helmet from "react-helmet"
import MainNav from "./MainNav"
import Hero from "./Hero/Hero"
import Introductions from "./Introductions"
import AboutSite from "./AboutSite"
import Experience from "./Experience/Experience"
import Contact from "./Contact"
import TopButton from "./TopButton"

const Layout = () => (
  <>
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      <title>A Working Copy</title>
      <meta name="googlebot" content="noindex" />
      {/* Structured Data is omitted for SEO, given the temporary nature of the site */}
      <body
        data-spy="scroll"
        data-target="#main-nav"
        data-offset="5"
        id="home"
        className="px-md-3"
      />
    </Helmet>
    <header className="header">
      <MainNav />
      <Hero />
    </header>
    <main>
      <Introductions />
      <AboutSite />
      <Experience />
      <Contact />
      <TopButton />
    </main>
    <footer className="border-top pt-2 pb-5 pl-3 text-secondary small">
      &copy; {new Date().getFullYear()}
    </footer>
  </>
)

export default Layout

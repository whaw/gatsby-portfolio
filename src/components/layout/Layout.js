import React, { useEffect } from "react"
import Helmet from "react-helmet"
import $ from "jquery"
import { initiateGsap } from "./gsapAnimations"
import { animateWithClassSelectors } from "../layout/animateWithClassSelectors"

import MainNav from "../MainNav"
import Hero from "../Hero/Hero"
import Introductions from "../Introductions"
import AboutSite from "../AboutSite"
import Experience from "../Experience/Experience"
import Contact from "../Contact"
import TopButton from "../TopButton"

const Layout = () => {

  function inView(section) {
    const scrollPos = $(window).scrollTop() + 100
    const elementTop = $(section).offset().top
    const elementBottom = elementTop + $(section).height()
    if (scrollPos > elementTop && scrollPos < elementBottom) return true
    return false
  }

  useEffect(() => {
    if ($(window).scrollspy) $(window).scrollspy('refresh')
  })

  useEffect(() => {
    // add a delay to allow gsap to load
    setTimeout(() => {
      if (typeof window !== `undefined`) {
        initiateGsap()
      }
    }, 100)
  }, [])

  return (
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
          data-offset="50"
          className="px-md-3"
        />
      </Helmet>
      <header className="header">
        <MainNav />
        <Hero inView={inView} animateWithClassSelectors={animateWithClassSelectors} />
      </header>
      <main>
        <Introductions />
        <AboutSite />
        <Experience />
        <Contact />
        <TopButton />
      </main>
      <footer className="border-top pt-2 pb-5 mb-5 pl-3 text-secondary small">
        &copy; {new Date().getFullYear()}
      </footer>
    </>
  )
}

export default Layout



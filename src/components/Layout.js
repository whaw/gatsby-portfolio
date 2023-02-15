import React, { useEffect } from "react"
import Helmet from "react-helmet"
import MainNav from "./MainNav"
import Hero from "./Hero/Hero"
import Introductions from "./Introductions"
import AboutSite from "./AboutSite"
import Experience from "./Experience/Experience"
import Contact from "./Contact"
import TopButton from "./TopButton"
import $ from "jquery"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { hide, animateFrom } from "./gsap_animations"

const Layout = () => {

  useEffect(() => {
    if ($(window).scrollspy) $(window).scrollspy('refresh')
  })

  useEffect(() => {
    // add a delay to allow loading
    setTimeout(() => {
      if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals("ScrollTrigger", ScrollTrigger)

        gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
          hide(elem); // assure that the element is hidden when scrolled into view

          ScrollTrigger.create({
            trigger: elem,
            markers: false,
            lazy: false,
            onEnter: function () { animateFrom(elem) },
            onEnterBack: function () { animateFrom(elem, -1) },
            onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
          });
        });
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
      <footer className="border-top pt-2 pb-5 mb-5 pl-3 text-secondary small">
        &copy; {new Date().getFullYear()}
      </footer>
    </>
  )
}

export default Layout



import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { initiateGsap } from "scripts/gsapAnimations";

import MainNav from "./MainNav";
import Hero from "./Hero";
import Introductions from "./Introductions";
import Experience from "./Experience";
import AboutSite from "./AboutSite";
import Contact from "./Contact";
import TopButton from "./TopButton";

const Layout = () => {
  const year = new Date().getFullYear();

  useEffect(() => {
    const handleLoad = () => {
        initiateGsap();
    };
  
    // consider adding loading... screen for slower connections
    // opting out for now for higher priorities
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
  
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  
  
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en-GB" }}>
        <title>A Working Copy – for experimentation and discovery</title>
        <meta name="googlebot" content="noindex" />
        {/* Structured Data is omitted for SEO, given the temporary nature of the site */}
        <body id="home" className="px-md-3" />
      </Helmet>
      <header className="header">
        <MainNav />
        <Hero />
      </header>
      <main>
        <Introductions />
        <Experience />
        <AboutSite />
        <Contact />
        <TopButton />
      </main>
      <footer className="border-top pt-2 pb-5 mb-5 pl-3 text-secondary small">
        &copy; {year}
      </footer>
    </>
  )
}

export default Layout;



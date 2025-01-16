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

    // Ensure images are loaded
    // Deprioritzing loading screen for higher value tasks, as target audience are HR professionals and on good connections
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // clean up
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);


  return (
    <>
      <Helmet htmlAttributes={{ lang: "en-CA" }} bodyAttributes={{ id: "home", class: "px-md-3" }}>
        <title>A Working Copy – for experimentation and discovery</title>
  
        {/* Opting out of search engine indexing given the temporary (semi-private) nature of the site */}
        <meta name="googlebot" content="noindex" />
        
        {/* Strutured data for voice assist (more accessiblity updates to come, deprioritizing for now) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "William Haw",
              "jobTitle": "Front-End Developer",
              "url": "https://whaw.github.io/"
            }
          `}
        </script>
      </Helmet>
      <header className="header">
        <MainNav />
      </header>
      <main>
        <Hero />
        <Introductions />
        <Experience />
        <AboutSite />
        <Contact />
        <TopButton />
      </main>
      <footer className="border-top pt-2 pb-5 mb-5 pl-3 text-secondary">
        <small>&copy; {year}</small>
      </footer>
    </>
  )
}

export default Layout;

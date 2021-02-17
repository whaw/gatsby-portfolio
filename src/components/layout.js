import React from "react"
import Helmet from "react-helmet"
import Header from "./Header"
import Skills from "./Skills"

const Layout = () => (
  <>
    <Helmet>
      <title>Cool</title>
      <body
        data-spy="scroll"
        data-target="#navbar"
        data-offset="0"
        id="home"
        className="px-md-3 pt-11"
      />
    </Helmet>
    <Header />
    <main>
      <Skills />
    </main>
    <div id="skills"></div>
    <footer>&copy; {new Date().getFullYear()}</footer>
  </>
)

export default Layout

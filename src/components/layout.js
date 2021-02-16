import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import Header from "./Header"

const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>Cool</title>
    </Helmet>
    <Header />
    <main>{children}</main>
    <div id="skills"></div>
    <footer>&copy; {new Date().getFullYear()}</footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

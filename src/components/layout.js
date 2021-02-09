import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"

const Layout = ({ children }) => (
  <>
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

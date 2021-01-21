import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"
import Header from "./Header"

const Layout = ({ children }) => (
  <>
    <Header />
    <Container>
      <Row>
        <Col>hello this is a col</Col>
      </Row>
    </Container>

    <main>{children}</main>
    <footer>© {new Date().getFullYear()}</footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

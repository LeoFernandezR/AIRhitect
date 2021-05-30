import * as React from "react"
import PropTypes from "prop-types"

import "typeface-lato"
import "typeface-montserrat"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

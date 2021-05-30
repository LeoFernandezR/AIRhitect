import React from "react"
import { InlineIcon } from "@iconify/react-with-api"
import { StaticImage } from "gatsby-plugin-image"

import "./navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <nav className="navbar__navbar">
        <button className="btn">
          <InlineIcon icon="system-uicons:menu-hamburger" />
        </button>
      </nav>
      <div className="navbar__logo">
        <StaticImage src="../../images/logo.png" />
      </div>
      <button className="btn navbar__contact__button">contact</button>
    </nav>
  )
}

export default Navbar

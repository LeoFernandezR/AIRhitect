import React, { useState } from "react"
import { InlineIcon } from "@iconify/react-with-api"
import { StaticImage } from "gatsby-plugin-image"

import "./navbar.scss"
import { Link } from "gatsby"

const Navbar = () => {
  const [displayNavbar, setDisplayNavbar] = useState(false)

  return (
    <nav className="navbar">
      <nav className="navbar__navbar">
        <button
          className="navbar__btn"
          onClick={() => setDisplayNavbar(!displayNavbar)}
        >
          <InlineIcon
            icon={
              displayNavbar
                ? "system-uicons:close"
                : "system-uicons:menu-hamburger"
            }
          />
          <span>menu</span>
        </button>
        <ul className={`navbar__menu ${displayNavbar ? "d-block" : ""}`}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about_us">about us</Link>
          </li>
          <li>
            <Link to="/works">works</Link>
          </li>
          <li>
            <Link to="/our_team">our team</Link>
          </li>
          <li>
            <Link to="/find_us">find us</Link>
          </li>
        </ul>
      </nav>
      <div className="navbar__logo">
        <StaticImage src="../../images/logo.png" alt="AIRhitect logo" />
      </div>
      <Link to="/find_us" className="btn navbar__contact__button">
        <InlineIcon icon="carbon:user-avatar" /> contact
      </Link>
    </nav>
  )
}

export default Navbar

import React from "react"

import About from "../components/About/About"
import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"

const about_us = () => (
  <Layout>
    <Seo title="About" />
    <About />
  </Layout>
)

export default about_us

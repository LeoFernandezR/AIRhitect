import React from "react"

import Layout from "../components/Layout/Layout"
import Projects from "../components/Projects/Projects"
import Seo from "../components/seo"

const about_us = () => (
  <Layout>
    <Seo title="Projects" />
    <Projects />
  </Layout>
)

export default about_us

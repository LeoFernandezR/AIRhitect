import * as React from "react"
import About from "../components/About/About"
import Home from "../components/Home/Home"

import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Home />
    <About />
  </Layout>
)

export default IndexPage

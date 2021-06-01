import * as React from "react"

import Home from "../components/Home/Home"
import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Home />
  </Layout>
)

export default IndexPage

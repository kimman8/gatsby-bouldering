import * as React from "react"
import Hero from "../components/Hero"
import Indoor from "../components/Indoor"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Indoor />
  </Layout>
)
//YT 1:19
export default IndexPage

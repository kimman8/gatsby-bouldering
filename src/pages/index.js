import * as React from "react"
import Email from "../components/Email"
import Hero from "../components/Hero"
import Indoor from "../components/Indoor"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Indoor heading={"Dope places to boulder"} />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)
export default IndexPage

import * as React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"

const About = ({ toggle }) => (
  <Layout>
    <Seo title="About Us" />
    <Testimonials />
    <Stats />
  </Layout>
)
export default About

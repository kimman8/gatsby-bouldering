import * as React from "react"
import Indoor from "../components/Indoor"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndoorPage = () => (
  <Layout>
    <Seo title="Indoor" />
    <Indoor heading={"Dope places to boulder"} />
  </Layout>
)
export default IndoorPage

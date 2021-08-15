import * as React from "react"
import { Button } from "../components/button"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Error>
      <h1>404</h1>
      <p>Oh no! Page not found!</p>
      <Button to="/" round big>
        Return Home
      </Button>
    </Error>
  </Layout>
)

export default NotFoundPage

const Error = styled.div`
  display: flex;
  background: #f26a2e;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: clamp(4rem, 10vw, 20rem);
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(2rem, 3vw, 10rem);
    margin-bottom: 2rem;
  }
`

import React, { useState } from "react"

import Dropdown from "./Dropdown"
import Footer from "./Footer"
import Header from "./header"
import { GlobalStyle } from "./styles/GlobalStyle"

const Layout = ({ children }) => {
  const [isOpen, setisOpen] = useState(false)
  const toggle = () => {
    setisOpen(!isOpen)
    console.log("closing")
  }
  return (
    <>
      <GlobalStyle />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

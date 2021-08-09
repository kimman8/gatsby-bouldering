import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">BOULDER</NavLink>
    </Nav>
  )
}

//YT 26:08

export default Header

const Nav = styled.nav`
  background: tomato;
  height: 80x;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw-1300px) / 2);
  z-index: 100;
  position: relative;
`
const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

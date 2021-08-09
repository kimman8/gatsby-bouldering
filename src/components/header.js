import React from "react"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">BOULDER</NavLink>
      <Bars />
    </Nav>
  )
}

//YT 30:00

export default Header

const Nav = styled.nav`
  background: tomato;
  height: 80px;
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
const Bars = styled(FaBars)`
  color: #fff;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

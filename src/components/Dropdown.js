import React from "react"
import { Link } from "gatsby"
import { menuData } from "../data/MenuData"
import styled from "styled-components"
import { Button } from "./Button"
import { AiOutlineClose } from "react-icons/ai"

const Dropdown = ({ isOpen, toggle }) => {
  // const [isOpen, setisOpen] = useState(false)
  // const toggle = e => {
  //   e.preventDefault()
  //   setisOpen(!isOpen)
  //   console.log("closing")
  // }
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownMenuItem to={item.link} key={index}>
              {item.title}
            </DropdownMenuItem>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button primary round to="/indoor">
            Book a climb
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  )
}

export default Dropdown

const DropdownContainer = styled.aside`
  position: fixed;
  z-index: 999;
  background: #0d0d0d;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`
const Icon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 2rem;
  background: transparent;
  outline: none;
  font-style: bold;
`
const CloseIcon = styled(AiOutlineClose)`
  color: #fff;
  cursor: pointer;
  &:hover {
    color: red;
    transition: 0.3s ease-in-out;
  }
`
const DropdownWrapper = styled.div`
  color: #fff;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
`
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`
const DropdownMenuItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  list-style: none;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #f26a2e;
  }
`
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

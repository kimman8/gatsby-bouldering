import React from "react"
import { ImLocation } from "react-icons/im"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Button } from "./Button"

const Indoor = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query IndoorQuery {
      allIndoorJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid(maxWidth: 3080, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getIndoor(data) {
    const indoorArray = []
    data.allIndoorJson.edges.forEach((item, index) => {
      indoorArray.push(
        <ProductCard key={index}>
          <ProductImg
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProductInfo>
            <TextWrap>
              <ImLocation />
              <ProductTitle>{item.node.name}</ProductTitle>
            </TextWrap>
            <Button
              to="/indoor"
              round
              primary
              css={`
                position: absolute;
                font-size: 1rem;
                top: 420px;
              `}
            >
              {item.node.button}
            </Button>
          </ProductInfo>
        </ProductCard>
      )
    })
    return indoorArray
  }
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>{getIndoor(data)}</ProductWrapper>
    </ProductsContainer>
  )
}

export default Indoor

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`
const ProductsHeading = styled.div`
  font-size: clamp(1.5rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`
const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`
const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  transition: 0.2s ease;
`
const ProductImg = styled(Img)`
  max-width: 100%;
  height: 100%;
  border-radius: 10px;
  position: relative;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  } ;
`
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: absolute;
  top: 375px;
`
const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`

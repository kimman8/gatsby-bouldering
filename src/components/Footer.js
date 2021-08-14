// import React from "react"
// import { Link } from "gatsby"
// import styled from "styled-components"

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <FooterLinksWrapper>
//         <FooterDesc>
//           <h1>Bouldering</h1>
//           <p>We strive to give the best climbs for our climbers</p>
//         </FooterDesc>
//         <FooterLinkItems>
//           <FooterLinkTitle>Contact Us</FooterLinkTitle>
//           <FooterLink to="/about">Contact</FooterLink>
//           <FooterLink to="/">Support</FooterLink>
//           <FooterLink to="/">Locations</FooterLink>
//           <FooterLink to="/">Careers</FooterLink>
//         </FooterLinkItems>
//       </FooterLinksWrapper>
//       <FooterLinksWrapper>
//         <FooterLinkItems>
//           <FooterLinkTitle>Videos</FooterLinkTitle>
//           <FooterLink to="/">Submit Video</FooterLink>
//           <FooterLink to="/">Ambassadors</FooterLink>
//           <FooterLink to="/">Agency</FooterLink>
//           <FooterLink to="/">Influencer</FooterLink>
//         </FooterLinkItems>
//         <FooterLinkItems>
//           <FooterLinkTitle>Social Media</FooterLinkTitle>
//           <FooterLink to="/">Instagram</FooterLink>
//           <FooterLink to="/">YouTube</FooterLink>
//           <FooterLink to="/">Facebook</FooterLink>
//           <FooterLink to="/">Twitter</FooterLink>
//         </FooterLinkItems>
//       </FooterLinksWrapper>
//     </FooterContainer>
//   )
// }

// export default Footer

// const FooterContainer = styled.div`

//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   color: #000;
//   background: #fafafb;
//   padding: 5rem calc((100vw - 1100px) / 2);
//   }
// `
// const FooterLinksWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   @media screen and (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
//   justify-content: center;
//   width: 100%;
//   padding: 1rem 2rem;
// `
// const FooterDesc = styled.div`
//   display: flex;
//   padding: 0 2rem;
//   justify-content: center;
//   align-items: flex-start;
//   flex-direction: column;
//   h1 {
//     margin-bottom: 3rem;
//     color: #f26a2e;
//   }
//   @media screen and (max-width: 400px) {
//     padding: 1rem;
//   }
// `
// const FooterLinkItems = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   padding: 1rem 2rem;
//   margin-bottom: 1rem;
//   @media screen and (max-width: 400px) {
//     padding: 1rem;
//   }
// `
// const FooterLinkTitle = styled.h2`
//   font-style: bold;
//   font-size: 1rem;
//   margin-bottom: 1rem;
// `
// const FooterLink = styled(Link)`
//   text-decoration: none;
//   color: #3d3d4e;
//   margin-bottom: 0.5rem;
//   &:hover {
//     color: #f26a2e;
//     transition: 0.3s ease-out;
//   }
// `
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>BLDRNG</h1>
          <p>We strive to create the best climbs for our climbers</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/">Support</FooterLink>
          <FooterLink to="/">Destinations</FooterLink>
          <FooterLink to="/">Sponsorships</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Videos</FooterLinkTitle>
          <FooterLink to="/">Submit Video</FooterLink>
          <FooterLink to="/">Ambassadors</FooterLink>
          <FooterLink to="/">Agency</FooterLink>
          <FooterLink to="/">Influencer</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/">Instagram</FooterLink>
          <FooterLink to="/">Facebook</FooterLink>
          <FooterLink to="/">Youtube</FooterLink>
          <FooterLink to="/">Twitter</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
`

const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`

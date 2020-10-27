import React from "react"
import {
  StyledFooter,
  FooterWrapper,
  Logo,
  LinkWrapper,
  LinkList,
  Title,
} from "./style"

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <Logo>
          <h1>Made by WeLearn</h1>
          {/* <p>Copyright 2020 Pokerify Inc. All Rights Reserved.</p> */}
        </Logo>
        <LinkWrapper>
          <LinkList>
            <Title>Learn More</Title>
            <li>Tutorials</li>
            {/* <li>Pricing</li> */}
            <li>Contact</li>
          </LinkList>
          <LinkList>
            <Title>Social</Title>
            {/* <li>Twitter</li>
            <li>Instagram</li> */}
            <li>YouTube</li>
            <li>Facebook</li>
          </LinkList>
          <LinkList>
            <Title>Legal</Title>
            <li>Terms & condition</li>
            <li>Privacy Policy</li>
          </LinkList>
        </LinkWrapper>
      </FooterWrapper>
    </StyledFooter>
  )
}

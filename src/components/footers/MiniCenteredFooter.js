import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { Container as ContainerBase } from "~/components/misc/Layouts.js"
// import { Logo } from "~/images/logo.svg"
import LinkedInIcon from "~/images/linkedin.svg"
import GitHubIcon from "~/images/github-icon.svg"
import { Link } from "gatsby"

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`mx-auto py-20 lg:py-24`

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`
const LogoImg = tw.img`w-8`
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`

const LinksContainer = tw.div`mt-8 font-medium md:flex flex-wrap justify-center items-center flex-col sm:flex-row`
const InternalLink = tw(
  Link
)`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`

const SocialLinksContainer = tw.div`mt-10`
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            {/* <Logo /> */}
            {/* <LogoText>Treact</LogoText> */}
          </LogoContainer>
          <LinksContainer>
            <InternalLink to="#home">Home</InternalLink>
            <InternalLink to="#portfolio">Portfolio</InternalLink>
            <InternalLink to="#skills">Skills</InternalLink>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink
              rel="noopener"
              target="_blank"
              href="https://www.linkedin.com/in/kellen-presta/"
            >
              <LinkedInIcon />
              <span style={{ display: "none" }}>Linked in</span>
            </SocialLink>
            <SocialLink
              rel="noopener"
              target="_blank"
              href="https://github.com/kpresta04"
            >
              <GitHubIcon />
              <span style={{ display: "none" }}>Github</span>
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2020, Kellen Presta. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  )
}

import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
import { Link } from "gatsby"

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js"

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-blue-900 text-gray-100 hocus:bg-blue-700 hocus:cursor-pointer hocus:text-gray-200 focus:outline-none focus:shadow-outline`

export default ({ bgImage }) => {
  const Container = styled.div`
    ${tw`relative -mx-8! -mt-8 bg-center bg-cover h-screen min-h-144`}
    background-image: url(${bgImage.childImageSharp.fluid.srcWebp});
  `

  const navLinks = [
    <NavLinks key={1}>
      {/* <NavLink href="#portfolio">Portfolio</NavLink>
      <NavLink href="#skills">Skills</NavLink> */}
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink to="/#contact">Contact Me</PrimaryLink>
    </NavLinks>,
  ]

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
            Full-Stack Engineer
            <br />
            bringing your projects to life.
          </Heading>
          <PrimaryAction>
            <Link to="#portfolio">View My Work</Link>
          </PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  )
}

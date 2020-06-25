import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
// import SvgDotPatternIcon from "~/images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js"
import Img from "gatsby-image"

const Container = tw.div`relative`

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`

const HeadingInfoContainer = tw.div`flex flex-col items-center`
const HeadingDescription = tw.p`mt-4 font-medium text-gray-800 text-center max-w-sm`

const Content = tw.div`mt-16`

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
])
const ImageDiv = styled.div(props => [
  tw`relative rounded md:w-10/12 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144  bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
])
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`
const Title = tw.h4`text-3xl font-bold text-gray-900`
const Description = tw.p`mt-2 text-sm leading-loose`
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`

export default ({ crImage, beerMeImage, gbsImage }) => {
  const cards = [
    {
      imageSrc: crImage.childImageSharp.fluid,
      subtitle: "Paid",
      title: "Loachella, NYC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://timerse.com",
    },

    {
      imageSrc: beerMeImage.childImageSharp.fluid,
      subtitle: "Free",
      title: "Rock In Rio, Upstate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://timerse.com",
    },

    {
      imageSrc: gbsImage.childImageSharp.fluid,
      subtitle: "Exclusive",
      title: "Lollapalooza, Manhattan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://timerse.com",
    },
  ]
  // console.log(crImage)

  return (
    <Container id="portfolio">
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Project Portfolio</HeadingTitle>
          <HeadingDescription>
            Here's a overview of some of my recent work.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <ImageDiv>
                <Img
                  imgStyle={{
                    width: "100%",
                    height: "auto",
                  }}
                  fluid={card.imageSrc}
                />
              </ImageDiv>
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Link href={card.url}>See Event Details</Link>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
    </Container>
  )
}

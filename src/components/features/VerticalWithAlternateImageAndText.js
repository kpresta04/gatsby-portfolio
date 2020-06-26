import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
// import SvgDotPatternIcon from "~/images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js"
import Img from "gatsby-image"
import CodeSvg from "~/images/code.svg"
import GitHubSvg from "~/images/github.svg"

const Container = tw.div`relative w-full`

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`

const HeadingInfoContainer = tw.div`flex flex-col items-center`
const HeadingDescription = tw.p`mt-4 font-medium text-lg sm:text-xl text-gray-800 text-center max-w-sm`

const Content = tw.div`mt-16`

const ProjButton = tw.button`w-11/12 uppercase mb-1 h-12 align-middle cursor-pointer bg-gray-800 hocus:bg-gray-600 text-white text-lg`

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
])
const ImageDiv = styled.div(props => [
  tw`relative rounded md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-144  bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
])
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`
const Title = tw.h4`text-4xl font-bold text-gray-900`
const Description = tw.p`mt-2 text-base leading-loose`
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`

export default ({ crImage, beerMeImage, gbsImage }) => {
  const cards = [
    {
      imageSrc: crImage.childImageSharp.fluid,
      subtitle: "Paid",
      title: "Casino Royale",
      description:
        "A casino web app, built in MERN with Redux and Firebase. Buy chips and try to beat the house! Implemented Blackjack and Slots.",
      url: "https://casino-royale-9c472.web.app/",
      gitHubLink: "https://github.com/kpresta04/casino-royale",
    },

    {
      imageSrc: beerMeImage.childImageSharp.fluid,
      subtitle: "Free",
      title: "Brewery Finder",
      description:
        "VanillaJS app for finding breweries in any area. Utilizes Mapbox with Foursquare API and Bulma CSS.",
      url: "https://kpresta04.github.io/beerme",
      gitHubLink: "https://github.com/kpresta04/beerme",
    },

    {
      imageSrc: gbsImage.childImageSharp.fluid,
      subtitle: "Exclusive",
      title: "Google Books Search",
      description:
        "Web app for saving a list of your favorite books. Built in MERN with Redux and utilizes Google Books API.",
      url: "https://gbr-search.herokuapp.com/",
      gitHubLink: "https://github.com/kpresta04/google-books-react-search",
    },
  ]
  // console.log(crImage)

  return (
    <Container
      // style={{
      //   backgroundImage: "linear-gradient(270deg,#1a64b5 50%,#4981d5 0)",
      // }}
      id="portfolio"
    >
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
                    borderRadius: "0.5rem",
                  }}
                  fluid={card.imageSrc}
                />
              </ImageDiv>
              <Details>
                {/* <Subtitle>{card.subtitle}</Subtitle> */}
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <div style={{ display: "flex" }}>
                  <Link
                    target="_blank"
                    style={{ width: "100%" }}
                    href={card.url}
                  >
                    <ProjButton style={{ transition: "all 233ms ease-in-out" }}>
                      {/* <CodeSvg
                        style={{
                          width: "40px",
                          height: "40px",
                        }}
                      /> */}
                      Web site
                    </ProjButton>
                  </Link>
                  <Link
                    style={{ width: "100%" }}
                    target="_blank"
                    href={card.gitHubLink}
                  >
                    <ProjButton style={{ transition: "all 233ms ease-in-out" }}>
                      {/* <GitHubSvg style={{ width: "40px", height: "40px" }} /> */}
                      GitHub
                    </ProjButton>
                  </Link>
                </div>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
    </Container>
  )
}

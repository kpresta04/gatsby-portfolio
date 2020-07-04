import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
// import SvgDotPatternIcon from "~/images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js"
import Img from "gatsby-image"
import CodeSvg from "~/images/code.svg"
import GitHubSvg from "~/images/github.svg"

const Container = tw.div`relative w-full mb-12`

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`

const HeadingInfoContainer = tw.div`flex flex-col items-center`
const HeadingDescription = tw.p`mt-4 font-medium text-lg sm:text-xl text-gray-800 text-center max-w-sm`

const Content = tw.div`mt-16`

const ShadowBox = tw.div`shadow-lg p-10 rounded-lg`

const ProjButton = tw.button`w-11/12 uppercase mb-1 h-12 align-middle cursor-pointer font-bold hocus:bg-gray-600! rounded-full text-white text-lg `

const Card = styled.div(props => [
  tw`mt-24 lg:mt-48 xl:mt-24 md:flex justify-center flex-wrap xl:mb-56`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
])
const ImageDiv = styled.div(props => [
  tw`relative rounded md:w-8/12 lg:w-5/12 flex-shrink-0 lg:mx-6 bg-cover bg-center`,

  // `&:hover{
  //   opacity:0;
  // }`,
])
const Details = styled.div(props => [
  tw`mt-0  md:w-8/12 lg:w-5/12 shadow-lg pb-12 rounded-lg transition-all duration-200`,
  `&:hover{
    transform: translateY(-1rem);
}`,
])
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`
const Title = tw.h4`text-4xl font-bold text-white  m-0 text-center pt-12 lg:pt-8 xl:pt-12 pb-8 px-8`
const Description = tw.p`mt-2 text-base leading-loose p-8`
const Link = tw.a`flex justify-center items-center hocus:no-underline mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`

export default ({ crImage, beerMeImage, gbsImage, simmonsImage }) => {
  const cards = [
    {
      imageSrc: simmonsImage.childImageSharp.fluid,
      subtitle: "Paid",
      title: "Simmons Gun Repair",
      description:
        "E-commerce freelance project commissioned by a local business. Features a custom storefront with Shopify headless CMS.",
      url: "https://peaceful-turing-1274a7.netlify.app/",
      gitHubLink: "https://github.com/kpresta04/simmons-gatsby",
      // bgColor: "rgb(255, 4, 4)",
      // bgColor: "rgb(0, 75, 98)",
      // bgColor: "rgb(80,127,177)",
      bgColor: "rgb(49, 106, 167)",
    },
    {
      imageSrc: crImage.childImageSharp.fluid,
      subtitle: "Paid",
      title: "Casino Web App",
      description:
        "A casino web app, built in MERN with Redux and Firebase. Buy chips and try to beat the house! Implemented Blackjack and Slots.",
      url: "https://casino-royale-9c472.web.app/",
      gitHubLink: "https://github.com/kpresta04/casino-royale",
      // bgColor: "rgb(33, 87, 168)",
      bgColor: "rgb(26, 46, 75)",
    },

    {
      imageSrc: gbsImage.childImageSharp.fluid,
      subtitle: "Exclusive",
      title: "Google Books Search",
      description:
        "Web app for saving a list of your favorite books. Built in MERN with Redux and utilizes Google Books API.",
      url: "https://gbr-search.herokuapp.com/",
      gitHubLink: "https://github.com/kpresta04/google-books-react-search",
      bgColor: "rgb(80,127,177)",
    },
    {
      imageSrc: beerMeImage.childImageSharp.fluid,
      subtitle: "Free",
      title: "Brewery Finder",
      description:
        "VanillaJS app for finding breweries in any area. Utilizes Mapbox with Foursquare API and Bulma CSS.",
      url: "https://kpresta04.github.io/beerme",
      gitHubLink: "https://github.com/kpresta04/beerme",
      // bgColor: "rgb(73, 196, 255)",
      bgColor: "rgb(26, 46, 75)",
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
            Here's an overview of some of my recent work.
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
                <div
                  style={{
                    borderRadius: "0.25rem",
                    clipPath: " polygon(0 0, 100% 0, 100% 85%, 0 100%)",
                    backgroundImage: `linear-gradient(to right bottom, ${card.bgColor}, #2d3748)`,
                  }}
                >
                  {/* <ShadowBox> */}
                  {/* <Subtitle>{card.subtitle}</Subtitle> */}

                  <Title>{card.title}</Title>
                </div>

                <Description>{card.description}</Description>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Link
                    rel="noopener"
                    target="_blank"
                    style={{ width: "100%" }}
                    href={card.url}
                  >
                    <ProjButton
                      style={{
                        backgroundColor: `${card.bgColor}`,
                        transition: "all 233ms ease-in-out",
                        maxWidth: "12rem",
                      }}
                    >
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
                    rel="noopener"
                    href={card.gitHubLink}
                  >
                    <ProjButton
                      style={{
                        backgroundColor: `${card.bgColor}`,

                        transition: "all 233ms ease-in-out",
                        maxWidth: "12rem",
                      }}
                    >
                      {/* <GitHubSvg style={{ width: "40px", height: "40px" }} /> */}
                      GitHub
                    </ProjButton>
                  </Link>
                </div>
                {/* </ShadowBox> */}
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
    </Container>
  )
}

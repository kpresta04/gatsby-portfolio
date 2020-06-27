import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { SectionHeading as HeadingTitle } from "../misc/Headings.js"

const Container = tw.div`relative`
const Content = tw.div`w-full max-w-screen-xl mx-auto py-20 lg:py-24`
const ThreeColumn = tw.div`w-full flex flex-col items-center lg:flex-row flex-wrap`
const Column = tw.div`mt-24`

const HeadingInfoContainer = tw.div`flex flex-col items-center text-white`
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-white text-lg text-center max-w-sm`

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`,
])
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`
const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`

export default () => {
  const blogPosts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      category: "Event Tips",
      title: "Finding Amazing Events Near You - Fast, Cheap & Free",
      url: "https://timerse.com",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1543365067-fa127bcb2303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      category: "Reviews",
      title: "The Top Rated Musical Concerts Worldwide in 2019",
      url: "https://reddit.com",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Discover",
      title: "This female band is making buzz all over the world",
      url: "https://timerse.com",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      category: "Event Tips",
      title: "Finding Amazing Events Near You - Fast, Cheap & Free",
      url: "https://timerse.com",
    },
  ]
  return (
    <Container
      id="skills"
      style={{
        // backgroundImage: "linear-gradient(to right bottom, #1a64b5, #4981d5)",

        background:
          "linear-gradient(#507eb1,#709dc7 10%,#dde9f5 38%,#eaf2f9 48%,#f6f9fc 62%)",

        transform: "skewY(-7deg)",
      }}
    >
      <Content style={{ transform: "skewY(7deg)" }}>
        <HeadingInfoContainer>
          <HeadingTitle>Skill Highlights</HeadingTitle>
          <HeadingDescription>
            Some amazing blog posts that are written by even more amazing
            people.
          </HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Category>{post.category}</Category>
                <Title>{post.title}</Title>
                <Link rel="noopener" href={post.url}>
                  Read Post
                </Link>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  )
}

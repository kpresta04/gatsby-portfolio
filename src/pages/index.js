import React from "react"
import { graphql } from "gatsby"
import AnimationRevealPage from "~/helpers/AnimationRevealPage.js"
import Hero from "~/components/hero/BackgroundAsImageWithCenteredContent.js"
import Features from "~/components/features/VerticalWithAlternateImageAndText.js"
import Blog from "~/components/blogs/ThreeColSimpleWithImage.js"

import ContactUsForm from "~/components/forms/SimpleContactUs.js"
import Footer from "~/components/footers/MiniCenteredFooter.js"

export const query = graphql`
  query {
    bgImage: file(relativePath: { eq: "comp.jpg" }) {
      childImageSharp {
        fluid(quality: 100, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default ({ data }) => (
  <AnimationRevealPage disabled>
    <Hero bgImage={data.bgImage} />
    <Features />
    <Blog />
    <ContactUsForm />

    <Footer />
  </AnimationRevealPage>
)

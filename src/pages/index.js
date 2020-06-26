import React from "react"
import { graphql } from "gatsby"
import AnimationRevealPage from "~/helpers/AnimationRevealPage.js"
import Hero from "~/components/hero/BackgroundAsImageWithCenteredContent.js"
import Features from "~/components/features/VerticalWithAlternateImageAndText.js"
import Blog from "~/components/blogs/ThreeColSimpleWithImage.js"

import ContactUsForm from "~/components/forms/SimpleContactUs.js"
import Footer from "~/components/footers/MiniCenteredFooter.js"
import "~/styles/globalStyles.css"

export const query = graphql`
  query {
    bgImage: file(relativePath: { eq: "comp.jpg" }) {
      childImageSharp {
        fluid(quality: 100, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beerMeImage: file(relativePath: { eq: "beerme14x9.png" }) {
      childImageSharp {
        fluid(
          quality: 100
          cropFocus: ATTENTION
          maxWidth: 1400
          maxHeight: 900
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    crImage: file(relativePath: { eq: "casinoBlackjack.png" }) {
      childImageSharp {
        fluid(
          quality: 100
          cropFocus: ATTENTION
          maxWidth: 1400
          maxHeight: 900
          webpQuality: 100
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    gbsImage: file(relativePath: { eq: "gbs14x9.png" }) {
      childImageSharp {
        fluid(
          quality: 100
          cropFocus: ATTENTION
          maxWidth: 1400
          maxHeight: 900
          webpQuality: 100
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default ({ data }) => (
  <AnimationRevealPage disabled>
    <Hero bgImage={data.bgImage} />
    <Features
      crImage={data.crImage}
      gbsImage={data.gbsImage}
      beerMeImage={data.beerMeImage}
    />
    <Blog />
    <ContactUsForm />

    <Footer />
  </AnimationRevealPage>
)

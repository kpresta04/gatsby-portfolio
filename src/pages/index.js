import React from "react"
import { graphql } from "gatsby"
import AnimationRevealPage from "~/helpers/AnimationRevealPage.js"
import Hero from "~/components/hero/BackgroundAsImageWithCenteredContent.js"
import Features from "~/components/features/VerticalWithAlternateImageAndText.js"
import Blog from "~/components/blogs/ThreeColSimpleWithImage.js"
import { Helmet } from "react-helmet"

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
    simmonsImage: file(relativePath: { eq: "simmons2.png" }) {
      childImageSharp {
        fluid(
          quality: 100
          cropFocus: CENTER
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
    network: file(relativePath: { eq: "network.jpg" }) {
      childImageSharp {
        fixed(quality: 100, cropFocus: CENTER, width: 336, height: 221) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    iot: file(relativePath: { eq: "iot.jpg" }) {
      childImageSharp {
        fixed(quality: 100, cropFocus: CENTER, width: 336, height: 221) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    crypto: file(relativePath: { eq: "crypto.jpg" }) {
      childImageSharp {
        fixed(quality: 100, cropFocus: CENTER, width: 336, height: 221) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    web_dev: file(relativePath: { eq: "web_dev.png" }) {
      childImageSharp {
        fixed(quality: 100, cropFocus: CENTER, width: 336, height: 221) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
export default ({ data }) => (
  <AnimationRevealPage disabled>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Kellen Presta</title>
    </Helmet>
    <Hero bgImage={data.bgImage} />
    <Features
      crImage={data.crImage}
      gbsImage={data.gbsImage}
      beerMeImage={data.beerMeImage}
      simmonsImage={data.simmonsImage}
    />
    <Blog
      iot={data.iot}
      crypto={data.crypto}
      network={data.network}
      web_dev={data.web_dev}
    />
    <ContactUsForm />

    <Footer />
  </AnimationRevealPage>
)

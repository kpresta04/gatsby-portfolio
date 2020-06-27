import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { css } from "styled-components/macro" //eslint-disable-line

const Container = tw.div`relative`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 text-gray-100 rounded-lg relative text-black`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-base font-medium tracking-wide border-b-2 py-2  hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`

const ShadowBox = tw.div`p-8 shadow-xl`
const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`
const Column = tw.div`sm:w-5/12 flex flex-col`
const InputContainer = tw.div`relative py-5 mt-6`
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`
const Input = tw.input``
const TextArea = tw.textarea`h-24 sm:h-full resize-none`
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-blue-700 text-white rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-blue-900 cursor-pointer hocus:-translate-y-px hocus:shadow-xl`

export default () => {
  return (
    <Container id="contact">
      <Content>
        <ShadowBox>
          <FormContainer>
            <div tw="mx-auto max-w-4xl">
              <h2>Contact Me</h2>
              <h4>
                Use the form below or send me an{" "}
                <a
                  style={{ color: "black" }}
                  target="_blank"
                  rel="noopener"
                  href="mailto:kpresta04@gmail.com"
                >
                  email.
                </a>
              </h4>
              <form action="#">
                <TwoColumn>
                  <Column>
                    <InputContainer>
                      <Label htmlFor="name-input">Your Name</Label>
                      <Input
                        id="name-input"
                        type="text"
                        name="name"
                        placeholder="E.g. John Doe"
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="email-input">Your Email Address</Label>
                      <Input
                        id="email-input"
                        type="email"
                        name="email"
                        placeholder="E.g. john@mail.com"
                      />
                    </InputContainer>
                  </Column>
                  <Column>
                    <InputContainer tw="flex-1">
                      <Label htmlFor="name-input">Your Message</Label>
                      <TextArea
                        id="message-input"
                        name="message"
                        placeholder="E.g. Details about your event"
                      />
                    </InputContainer>
                  </Column>
                </TwoColumn>

                <SubmitButton type="submit" value="Submit">
                  Submit
                </SubmitButton>
              </form>
            </div>
          </FormContainer>
        </ShadowBox>
      </Content>
    </Container>
  )
}

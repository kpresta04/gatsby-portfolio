import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { css } from "styled-components/macro" //eslint-disable-line
import "./form.css"

const Container = tw.div`relative mx-auto`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`

const FormContainer = styled.div`
  ${tw`w-full text-gray-100 rounded-lg relative text-black`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full border-r-0 border-l-0 border-t-0 border-b-4  border-transparent hocus:border-blue-600 border-solid text-base font-medium tracking-wide  p-4 hocus:outline-none! transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`

const BlueSpan = tw.span`text-blue-500`

const ShadowBox = tw.div`p-8 shadow-xl rounded`
const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between items-center`
const Column = tw.div`sm:w-5/12 flex flex-col`
const InputContainer = tw.div`relative py-5 mt-6`
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-base mb-4`
const Input = tw.input`shadow-md rounded border-none bg-white`
const TextArea = tw.textarea`h-64 resize-none rounded border-none bg-white`
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-blue-700 text-white rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-blue-900 cursor-pointer hocus:-translate-y-px hocus:shadow-xl`

export default () => {
  return (
    <Container id="contact">
      <Content>
        <ShadowBox style={{ backgroundColor: "rgb(223, 230, 236)" }}>
          <FormContainer>
            <div tw="mx-auto max-w-4xl">
              <h2>Contact Me</h2>
              <h4>
                Using the form below, or get in touch directly via{" "}
                <a
                  style={{ color: "black" }}
                  target="_blank"
                  rel="noopener"
                  href="mailto:kpresta04@gmail.com"
                >
                  <BlueSpan>email.</BlueSpan>
                </a>
              </h4>
              <form
                name="contact"
                data-netlify="true"
                method="POST"
                data-netlify-honeypot="bot-field"

                // onSubmit={e => {
                //   e.preventDefault()
                // }}
              >
                <input type="hidden" name="form-name" value="contact" />
                <TwoColumn>
                  <Column>
                    <InputContainer>
                      <Label htmlFor="name-input">Your Name</Label>
                      <Input
                        style={{ minWidth: "300px" }}
                        required
                        id="name-input"
                        type="text"
                        name="name"
                        label="name"
                        placeholder="Name"
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="email-input">Your Email Address</Label>
                      <Input
                        required
                        style={{ minWidth: "300px" }}
                        id="email-input"
                        type="email"
                        name="email"
                        label="email"
                        placeholder="email@mail.com"
                      />
                    </InputContainer>
                  </Column>
                  <Column tw="md:mr-16 lg:mr-20">
                    <InputContainer tw="flex-1">
                      <Label htmlFor="name-input">Your Message</Label>
                      <TextArea
                        label="message"
                        required
                        style={{ minWidth: "300px" }}
                        id="message-input"
                        name="message"
                        placeholder="Message"
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

import React from "react"

import styled from "@emotion/styled"
import { mq } from "../components/styles"

import Layout from "../components/layout"
import Button from "../components/button"
import EmailButton from "../components/email-button"
import PhoneButton from "../components/phone-button"
import Title from "../components/title"

const Container = styled.div({
  flexGrow: 1,
  flexShrink: 1,
  margin: "0 auto",

  [mq[1]]: {
    maxWidth: 960,
    width: 960,
  },

  [mq[2]]: {
    maxWidth: 1152,
    width: 1152,
  },

  [mq[3]]: {
    maxWidth: 1344,
    width: 1344,
  },
})

const IndexPage = () => (
  <Layout>
    <Container>
      <Title title="It's all about keeping you safe while saving you money" />
      <PhoneButton type="office" phone="352-462-0414" />
      <PhoneButton type="fax" phone="800-418-4261" />
      <EmailButton text="Email us" email="wiagencies@gmail.com" />
      <Button
        text="Visit us"
        url="https://www.google.com/maps/place/8+Beverly+Hills+Blvd,+Beverly+Hills,+FL+34465/@28.9267856,-82.4614126,17z"
        title="Visit us" />
    </Container>
  </Layout>
)

export default IndexPage

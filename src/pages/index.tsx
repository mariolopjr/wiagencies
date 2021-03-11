import React from "react"

import styled from "@emotion/styled"
import { mq } from "../components/styles"

import Layout from "../components/layout"
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
    </Container>
  </Layout>
)

export default IndexPage

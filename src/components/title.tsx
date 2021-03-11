import React from "react"

import styled from "@emotion/styled"
import { mq } from "./styles"

const TitleContainer = styled.h1({
  color: "#fff",
  flex: "none",
  fontSize: "1.5rem",
  fontWeight: 500,
  letterSpacing: 1.3,
  lineHeight: 1.125,
  margin: 0,
  padding: ".75rem",
  width: "50%",

  [mq[1]]: {
    fontSize: "2.5rem",
  },
})

interface TitleProps {
  title: string
}

const Title = ({ title }: TitleProps) => (
  <TitleContainer>{title}</TitleContainer>
)

export default Title

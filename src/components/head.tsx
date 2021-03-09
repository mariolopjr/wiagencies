import React from "react"
import { Link } from "gatsby"

import styled from "@emotion/styled"

const HeadContainer = styled.div({
  flexGrow: 0,
  flexShrink: 0,
})

const Nav = styled.nav({
  alignItems: "stretch",
  display: "flex",
  minHeight: "3.25rem",
  position: "relative",
  zIndex: 30,
})

const BrandContainer = styled.div({
  alignItems: "stretch",
  display: "flex",
  flexShrink: 0,
  minHeight: "3.25rem",
  position: "relative",
  zIndex: 30,
})

const BrandLink = styled(Link)({
  alignItems: "center",
  color: "#fff",
  display: "flex",
  flexGrow: 0,
  flexShrink: 0,
  fontSize: "1.75rem",
  fontWeight: 400,
  letterSpacing: 1.2,
  lineHeight: 1.5,
  padding: ".5rem .75rem",
  position: "relative",
  textDecoration: "none",
})

interface HeadProps {
  title: string
}

const Head = ({ title }: HeadProps) => (
  <HeadContainer>
    <Nav>
      <BrandContainer>
        <BrandLink to="/">{title}</BrandLink>
      </BrandContainer>
    </Nav>
  </HeadContainer>
)

export default Head

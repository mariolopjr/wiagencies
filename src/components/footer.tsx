import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import styled from "@emotion/styled"
import { mq } from "./styles"

const FooterContainer = styled.footer({
  alignItems: "center",
  color: "#fff",
  display: "flex",
  fontSize: "1rem",
  padding: "8px",
  justifyContent: "space-between",
  textAlign: "center",
  zIndex: 30,
})

const Copyright = styled.span({
  fontSize: "0.8rem",
})

const Hidi = styled.span({
  display: "none",

  [mq[1]]: {
    display: "flex",
  },
})

interface FooterProps {
  copyright: string
}

const Footer = ({ copyright }: FooterProps) => (
  <FooterContainer>
    <Hidi />
    <Copyright>{copyright}</Copyright>
    <StaticImage
      src="../../static/images/ethics-registered-member-badge.png"
      className="bg"
      alt="Ethics registered member badge"
      title="Ethics registered member badge"
      placeholder="blurred"
      layout="constrained"
      width={80}
      formats={['auto', 'webp', 'avif']}
    />
  </FooterContainer>
)

export default Footer

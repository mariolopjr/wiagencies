import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import styled from "@emotion/styled"

const FooterContainer = styled.footer({
  color: "#fff",
  flexGrow: 0,
  flexShrink: 0,
  fontSize: "1rem",
  padding: "8px",
  textAlign: "center",
  zIndex: 30,
})

interface FooterProps {
  copyright: string
}

const Footer = ({ copyright }: FooterProps) => (
  <FooterContainer>
    {copyright}
    <StaticImage
      src="../../static/images/ethics-registered-member-badge.png"
      className="bg"
      style={{
        position: `absolute`,
      }}
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

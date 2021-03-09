/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { ReactNode } from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Head from "./head"
import Body from "./body"

import { css } from "@emotion/react"
import { colors, Theme } from "./styles"

const bgStyles = css({
  left: 0,
  height: "100%",
  position: "absolute",
  top: 0,
  userSelect: "none",
  width: "100%",
  zIndex: 0,

  ":before": {
    background: "linear-gradient(to bottom, #39b4dc 0%, #0f729b 100%)",
    content: '""',
    height: "100%",
    left: 0,
    opacity: .8,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 1,
  },
})

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {Theme()}
        <Helmet
          htmlAttributes={{
            lang: "en",
          }}
          title={data.site.siteMetadata.title}
          meta={[
            { name: "title", content: "World Insurance Agency" },
            {
              name: "description",
              content:
                "Covering all of your insurance needs: auto, home, motocycle, commerical, and more!",
            },
          ]}
        />
        <section className="hero is-fullheight">
          <StaticImage
            src="../../static/images/bg.jpg"
            css={bgStyles}
            alt="Background Photo by Danielle MacInnes on Unsplash"
            title="Background Photo by Danielle MacInnes on Unsplash"
            placeholder="blurred"
            layout="fullWidth"
            loading="eager"
            formats={["auto", "webp", "avif"]}
          />

          <Head title={data.site.siteMetadata.title} />

          <div className="hero-body">{children}</div>

          <div className="hero-foot has-text-centered is-size-6 has-text-white">
            &copy; World Insurance Agency
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
          </div>
        </section>
      </>
    )}
  />
)

export default Layout

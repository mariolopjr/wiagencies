/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Navbar from "../components/Navbar"
import "./index.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        heroBg: imageSharp(fluid: { originalName: { regex: "/bg.jpg/" } }) {
          sizes(maxWidth: 2160) {
            ...GatsbyImageSharpSizes_withWebp
          }
        }
        ethicsLogo: imageSharp(fluid: { originalName: { regex: "/ethics-registered-member-badge.png/" } }) {
          sizes(maxWidth: 80) {
            ...GatsbyImageSharpSizes_withWebp
          }
        }
      }
    `}
    render={data => (
      <>
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
          <Img
            className="bg"
            style={{
              position: `absolute`,
            }}
            sizes={data.heroBg.sizes}
            alt="Background Photo by Danielle MacInnes on Unsplash"
            title="Background Photo by Danielle MacInnes on Unsplash"
            loading="eager"
          />

          <div className="hero-head">
            <Navbar siteTitle={data.site.siteMetadata.title} />
          </div>

          <div className="hero-body">{children}</div>

          <div className="hero-foot has-text-centered is-size-6 has-text-white">
            &copy; World Insurance Agency
            <Img
              className="is-pulled-right"
              sizes={data.ethicsLogo.sizes}
              alt="Ethics Registered Member"
              title="Ethics Registered Member"
              loading="lazy"
            />
          </div>
        </section>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

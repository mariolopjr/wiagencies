import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            auto
            home
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <div className="container">
          <div className="columns">
            <h1 className="title column is-half is-size-2 is-size-4-mobile has-text-white">
              It's all about keeping you safe while saving you money
            </h1>
          </div>
          <div className="columns">
            <h2 className="subtitle column is-half has-text-white has-text-centered-mobile">
              <a
                className="button is-rounded quote-btn"
                href={data.site.siteMetadata.auto}
              >
                Auto quote
              </a>
              <a
                className="button is-rounded quote-btn"
                href={data.site.siteMetadata.home}
              >
                Home quote
              </a>
            </h2>
          </div>
        </div>
      </Layout>
    )}
  />
)

export default IndexPage

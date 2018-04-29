import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from "gatsby-image"

import Navbar from '../components/Navbar'
import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'title', content: 'World Insurance Agency' },
        { name: 'description', content: 'Covering all of your insurance needs: auto, home, motocycle, commerical, and more!' },
      ]}
    />
    <section className="hero is-fullheight">
      <Img
        className="bg"
        style={{
          position: `absolute`,
        }}
        sizes={data.heroBg.sizes}
        title={`Photo by Danielle MacInnes on Unsplash`}
      />

      <div className="hero-head">
        <Navbar siteTitle={data.site.siteMetadata.title} />
      </div>

      <div className="hero-body">
        {children()}
      </div>

      <div className="hero-foot has-text-centered is-size-6 has-text-white">
        &copy; World Insurance Agency
        <img
          src="/img/ethics-registered-member-badge.png"
          className="is-pulled-right"
          alt="Ethics Registered Member"></img>
      </div>
    </section>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    heroBg: imageSharp(id: { regex: "/bg.jpg/" }) {
      sizes(maxWidth: 2160) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
  }
`

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import footer from "../images/Footer.svg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{backgroundColor:"#8fd0e7", width:"100%", textAlign: "center"}}>
      <Header siteTitle="dabramson.io" />
      <div>
        <main>{children}</main>
        <div className="footer">
        <footer className = "container">
          <p style={{position:"relative", textAlign:"center", paddingTop: '200px'}}> Copyright 2020 Dylan Abramson </p>
        </footer>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

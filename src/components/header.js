import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import './header.css'


function Header({siteTitle}) {

  const [scroll, setScroll] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    document.addEventListener("scroll", () => {
        const scrollCheck = window.scrollY;
        setScroll(scrollCheck);

      })
  })




  return (
    <header
      style={{
        textAlign: 'justify',
        position: 'fixed',
        backgroundColor: `rgba(0,0,0,${(scroll)})`,
        width: '100%',
        zIndex: '6',
        top: 0

      }}
    >

      <div
        style={{
          margin: `0`,




        }}
      >
      <div style={{
          float: `right`,
          marginRight: '20px',
          textDecoration: 'none',
          fontFamily: "Open Sans",

        }}>
        <div style={{padding: '15px'}}>
        <Link fade to="/home"
        style={{
          color: `white`,
          textDecoration: `none`,
          marginRight: '20px',

        }}> Portfolio </Link>
        <Link fade to="/about/"
        style={{
          color: `white`,
          textDecoration: `none`,

        }}> About </Link>
        </div>





        </div>
        <Link className="siteTitle" to="/">
        <h1 style={{
          fontFamily: 'Open Sans',
          fontWeight: 'bold',
          paddingLeft: '15px',
          paddingTop: '10px',
      


        }}>

            {siteTitle}

        </h1>
        </Link>


      </div>
    </header>
  )

}
export default Header;

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../components/about.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSlider from 'gatsby-image-background-slider'




const AboutPage = () => (
  <div style={{height: "1000px"}}>
    <SEO title="Evo" />
    <h1 style={{color: "white", marginTop: "80px"}}> Evo </h1>
    


    <p style={{
      color: "white",
      marginTop: "400px",
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '350px',
      textAlign: 'justify'}}> In the spring of 2018, four other students and I designed and developed Evo for our IDEA 350 class.
    Evo is a top-down action-adventure game that teaches the basics of evolution.
    It uses open-world level design and Metroidvania-style progression mechanics.
    There are three major biomes, each with different plant and animal species.
    </p>
    <p style={{
      color: "white",
      marginTop: "10px",
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '350px',
      textAlign: 'justify'}}>
    My role on the team was designing core mechanics and enemy AI systems.
    Thanks to all the hard work of our team, Evo won the best game award in our class!
    </p>









  </div>



)

export default AboutPage

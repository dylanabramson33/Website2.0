import React from "react"

import "../components/about.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (

  <Layout>
  <div className="container" style={{paddingTop: "150px",}}>
    <SEO title="About" />
    <div className="container about" style={{
        display: 'flex-grid',
        textAlign: 'center',
        maxWidth:'40rem',
        minWidth:'10rem',
        minHeight: '20em',
        maxHeight: '25em',
        textAlign : 'justify',
        margin: "auto",

        color: "white",
        height: "250px",

       }}>

      <h1 style={{textAlign: 'center'}}> About </h1>
      <div style={{textAlign: 'center', }}>
      <p>
      My name is Dylan Abramson and I'm a twenty-year-old developer based in New Paltz, NY.
       Right now I'm a junior at Wesleyan University where I'm studying math and computer science.
       I believe we can use technology to achieve noble goals:

      </p>
      <h4 style={{fontStyle:'italic', color:'black'}}>
      to tell stories, to enrich communities, and to teach new and challenging ideas.
      </h4>
      </div>
    </div>
    <div style={{
        display: 'flex-grid',
        textAlign: 'center',
        minWidth:'10rem',
        textAlign : 'justify',

        margin: "auto",
        marginTop: "20px",
        color: "white",

       }}>
      <h1 style={{textAlign: 'center'}}> Experience </h1>
      <h4 style={{textAlign: 'justify', marginTop: '20px'}}>
      Curriculum Associates

      </h4>
      <h5 style={{display: 'inline-block', textAlign: 'justify', marginTop: '20px'}}>
      Software Engineering Intern

      </h5>
      <h7 style={{display: 'block', marginTop: '5px'}}>
      June 2018 - June 2019

      </h7>
      <p>
      Designed and implemented two web applications using Django to automate production processes and ensure fast
      access to large databases by utilizing ORM optimizations.
      Created a custom search algorithm in python by applying modified Levenshtein distance to grant curriculum
      writers simple access and search capabilities for variably structured content.
      Used web scraping and third party APIs to dynamically research and analyze market trends and state-level
      product requirements

      </p>
      <h4 style={{textAlign: 'justify', marginTop: '60px'}}>
      Wesleyan University

      </h4>
      <h5 style={{display: 'inline-block', textAlign: 'justify', marginTop: '20px'}}>
      Course Assistant and Tutor

      </h5>
      <h7 style={{display: 'block', marginTop: '10px'}}>
      January 2017 - January 2020

      </h7>
      <p>
      Provide course assistance during labs and individual help sessions. Also
      provide Calculus tutoring for struggling students.


      </p>
    </div>



  </div>
  </Layout>


)

export default AboutPage

import React from "react"


import Layout from "../components/layout"
import Box from "../components/Box"
import SEO from "../components/seo"
import evo from "../images/evo.png"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/home.css"

const IndexPage = () => (
  <Layout>


  <div>
    <SEO title="Home" />

    <div style={{
      display: 'flex-grid',
      textAlign: "center",


    }}>
      <h1 className="home" style={{color: '#FFFFFF',  margin: 'auto', marginTop:"100px",
       fontFamily: "Open Sans", width: '300px', height: '80px'}}>
      Projects
      </h1>
      <div className=".container-fluid" style ={{
        fontFamily: "Open Sans",

      }}>

        <Link to="/evo/" style={{textDecoration: 'none'}}> <Box/> </Link>
        <Link to="/edmaps/" style={{textDecoration: 'none'}}> <Box/> </Link>

      </div>

    </div>

  </div>
  </Layout>





)

export default IndexPage

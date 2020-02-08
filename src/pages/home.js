import React from "react"


import Layout from "../components/layout"
import Box from "../components/Box"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/home.css"

const IndexPage = ({data}) => {
  const projects = data.allContentfulProject.edges;
  console.log(projects)
  return (
  <Layout>


  <div>
    <SEO title="Home" />

    <div style={{
      display: 'flex-grid',

      paddingTop: '100px'


    }}>
      <h1 className="home" style={{color: '#FFFFFF',  margin: 'auto',
       fontFamily: "Open Sans", width: '300px', height: '80px'}}>
      Projects
      </h1>
      <div className=".container" style ={{
        fontFamily: "Open Sans",

      }}>
      {projects.map((item) =>
        <Link to={`/project/${item.node.slug}`} style={{textDecoration: 'none'}}>
        <Box  projectTitle={item.node.title}
              previewImage={item.node.previewImage.file.url}
              role={item.node.role}
              shortDescription={item.node.shortDescription}
              />
        </Link>

      )}


      </div>

    </div>

  </div>
  </Layout>





)
}

export default IndexPage;

export const query = graphql`
  query ProjectPageQuery {
    allContentfulProject(limit: 1000, filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          id
          title
          role
          shortDescription
          slug
          previewImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

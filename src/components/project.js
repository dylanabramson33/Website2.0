import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../components/about.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSlider from 'gatsby-image-background-slider'




const Project = ({data}) => {
  const {projectDescription, title, downloadLink, githubLink} = data.contentfulProject;

  return (

  <Layout>
  <div style={{paddingTop: '100px'}}>
    <SEO title="Evo" />
    <h1 style={{color: "white"}}> {title} </h1>



    <p style={{
      color: "white",
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '350px',
      textAlign: 'justify'}}>
    </p>
    <p style={{
      color: "white",
      marginTop: "10px",
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '350px',
      textAlign: 'left'}}>
        {projectDescription.projectDescription}
    </p>

    {downloadLink && <a style={{textAlign:'center'}}href={downloadLink.file.url}>Download Game (Mac Only)</a>}
    {githubLink && <a style={{textAlign:'center'}}href={githubLink}>Github Link</a>}



  </div>
  </Layout>



)
}
export default Project;

export const data = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      projectDescription {
        projectDescription
      }
      downloadLink {
        file {
          url
        }
      }
      githubLink
    }
  }
`;

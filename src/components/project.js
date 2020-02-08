import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../components/about.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import github from "../images/github.svg"
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

    {downloadLink && <button style={{borderRadius: '5px',
                                  borderColor:'black',
                                  backgroundColor:'transparent',
                                  borderWidth: '1.5px'}}>
     <a style={{textAlign:'center', color:'black', textDecoration: 'none'}}
     href={downloadLink.file.url}>
     Download Game (Mac Only)</a>
     </button>}
    {githubLink && <button style={{borderRadius: '5px',
                                  borderColor:'black',
                                  backgroundColor:'transparent',
                                  borderWidth: '1.5px'}}>
     <a style={{textAlign:'center', color:'black', textDecoration: 'none'}}
     href={githubLink}><img style={{paddingBottom:'3px', marginRight:'15px', width:'20px'}} src={github}/>Code</a>
     </button>}



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

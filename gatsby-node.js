const path = require(`path`);
const slash = require(`slash`);
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful
  return graphql(
    `
      {
        allContentfulProject{
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data",      result.errors);
      }
      // Resolve the paths to our template
      const projectTemplate = path.resolve("./src/components/project.js");
      // Then for each result we create a page.
      result.data.allContentfulProject.edges.forEach(edge => {
        createPage({
          path: `/project/${edge.node.slug}/`,
          component: slash(projectTemplate),
          context: {
	           slug: edge.node.slug,
             id: edge.node.id
          }
        });
      });
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
};
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// Create Recipe nodes from the strapi API
const path = require(`path`);

// Create Recipes dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const recipeTemplate = path.resolve(`src/templates/recipes.jsx`);
  const result = await graphql(`
    query {
      allStrapiRecipe {
        edges {
          node {
            Title
            Body
            Tags
            author {
              username
            }
            created_at
            id
          }
        }
      }
    }
  `)
  result.data.allStrapiRecipe.edges.forEach(edge => {
    let slug = edge.node.Title.replace(/\s+/g, '-').toLowerCase();
    createPage({
      path: `recipes/${slug}`,
      component: recipeTemplate,
      context: {
        title: edge.node.Title,
        id: edge.node.id
      },
    })
  })
}

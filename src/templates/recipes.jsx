import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const RecipeTemplate = ({ data }) => {
  const recipe = data.strapiRecipe;
  return (
    <Layout>
      <h1>{recipe.Title}</h1>
      <p>
        By:
        <Link to={`/authors/User_${recipe.author.id}`}>
          {recipe.author.username}
        </Link>
      </p>
      <p>{recipe.Body}</p>
    </Layout>
  );
};

export default RecipeTemplate;

export const query = graphql`
query RecipeTemplate($id: String) {
  strapiRecipe(id: { eq: $id }) {
      Title
      Created
      Body
      Tags
      id
      author {
        id
        username
      }
    }
  }
`;

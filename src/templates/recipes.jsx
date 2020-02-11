import React from 'react';
// markdown converter
import showdown from 'showdown';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';

const converter = new showdown.Converter({ ghCompatibleHeaderId: true });

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
      <div
        dangerouslySetInnerHTML={{ __html: converter.makeHtml(recipe.Body) }}
      />
    </Layout>
  );
};

export default RecipeTemplate;

RecipeTemplate.propTypes = {
  data: PropTypes.shape({
    strapiRecipe: PropTypes.object,
  }).isRequired,
};

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

import React from 'react';
// markdown converter
import showdown from 'showdown';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import AuthorLink from '../components/author-link';

const converter = new showdown.Converter({ ghCompatibleHeaderId: true });

const RecipeTemplate = ({ data }) => {
  const recipe = data.strapiRecipe;
  const author = recipe.author ? <AuthorLink uid={recipe.author.id} name={recipe.author.username} /> : '';

  return (
    <Layout>
      <h1>{recipe.Title}</h1>
      {author}
      <div
        dangerouslySetInnerHTML={{ __html: converter.makeHtml(recipe.Body) }}
      />
    </Layout>
  );
};

export default RecipeTemplate;

RecipeTemplate.propTypes = {
  data: PropTypes.shape({
    strapiRecipe: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};

export const query = graphql`
query RecipeTemplate($id: String!) {
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

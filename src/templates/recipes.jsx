import React from 'react';
// markdown converter
import showdown from 'showdown';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import AuthorLink from '../components/author-link';

const converter = new showdown.Converter({ ghCompatibleHeaderId: true });

const RecipeTemplate = ({ data }) => {
  const recipe = data.strapiRecipes;
  const author = recipe.Author ? <AuthorLink uid={recipe.Author.id} name={recipe.Author.username} /> : '';

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
    strapiRecipes: PropTypes.string,
  }).isRequired,
};

export const query = graphql`
query RecipeTemplate($id: String!) {
  strapiRecipes(id: { eq: $id }) {
      Title
      created_at
      Body
      Tags
      id
      Author {
        id
        username
      }
    }
  }
`;

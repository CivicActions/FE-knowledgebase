import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../../components/layout';

const RecipesIndex = ({ data }) => (
  <Layout>
    <h1>Recipes and Shared Learnings</h1>
    <p>Placeholder description</p>

    <h2>All Recipes</h2>
    <ul>
      {data.allStrapiRecipes.edges.map((document) => (
        <li key={document.node.id}>
          <h3>
            <Link
              // @todo refactor the slug to make it more modular
              to={`/recipes/${document.node.Title.replace(/\s+/g, '-').toLowerCase()}`}
            >
              { document.node.Title }
            </Link>
          </h3>
          <p>{ document.node.Summary }</p>
        </li>
      ))}
    </ul>

  </Layout>
);

export default RecipesIndex;

RecipesIndex.propTypes = {
  data: PropTypes.shape({
    allStrapiRecipes: PropTypes.objectOf(PropTypes.array),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiRecipes {
      edges {
        node {
          Title
          Body
          Tags
          Summary
          Author {
            username
          }
          created_at
          id
        }
      }
    }
  }
`;

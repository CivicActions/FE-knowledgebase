import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, StaticQuery } from 'gatsby';

const RelatedRecipes = ({ tag }) => (
  <StaticQuery
    query={graphql`
     query recipeQuery {
      allStrapiRecipes {
        edges {
         node {
          Title
          id
          Tags
         }
        }
       }
      }
    `}
    render={(data) => {
      const related = [];
      Object.keys(data.allStrapiRecipes.edges).forEach((id) => {
        if (data.allStrapiRecipes.edges[id].node.Tags === tag) {
          related.push(
            <h3>
              <Link
                // @todo refactor the slug to make it more modular
                to={`/recipes/${data.allStrapiRecipes.edges[id].node.Title.replace(/\s+/g, '-').toLowerCase()}`}
              >
                { data.allStrapiRecipes.edges[id].node.Title }
              </Link>
            </h3>,
          );
        }
      });

      return (
        related.length
          ? (
            <>
              <h2>Related Recipes</h2>
              { related }
            </>
          )
          : ''
      );
    }}
  />
);

export default RelatedRecipes;

RelatedRecipes.propTypes = {
  tag: PropTypes.string.isRequired,
};

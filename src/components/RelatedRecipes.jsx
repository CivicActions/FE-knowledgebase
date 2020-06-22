import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, StaticQuery } from 'gatsby';

const RelatedRecipies = ({ tag }) => (
  <StaticQuery
    query={graphql`
     query recipeQuery {
      allStrapiRecipe {
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
      Object.keys(data.allStrapiRecipe.edges).forEach((id) => {
        if (data.allStrapiRecipe.edges[id].node.Tags === tag) {
          related.push(
            <h3>
              <Link
                // @todo refactor the slug to make it more modular
                to={`/recipes/${data.allStrapiRecipe.edges[id].node.Title.replace(/\s+/g, '-').toLowerCase()}`}
              >
                { data.allStrapiRecipe.edges[id].node.Title }
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

export default RelatedRecipies;

RelatedRecipies.propTypes = {
  tag: PropTypes.string.isRequired,
};

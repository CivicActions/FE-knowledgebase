/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header/header';
import '../sass/styles.scss';
import '../sass/components/layout.scss';
import RelatedRecipes from './RelatedRecipes';

const Layout = ({ children, tag }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        {tag ? <aside><RelatedRecipes tag={tag} /></aside> : '' }
        <footer>
          ©
          {' '}
          {new Date().getFullYear()}
          ,
          {' '}
          Built with
          {' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
};

Layout.defaultProps = {
  tag: false,
};

export default Layout;

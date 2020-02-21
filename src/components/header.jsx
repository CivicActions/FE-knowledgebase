import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import '../sass/components/header.scss';

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="site-header__inner">
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;

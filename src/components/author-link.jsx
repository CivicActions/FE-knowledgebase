import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

// Displays a link to a post author
const AuthorLink = ({ uid, name }) => (
  <span>
    By:
    <Link to={`/authors/User_${uid}`}>
      {name}
    </Link>
  </span>
);

export default AuthorLink;

AuthorLink.propTypes = {
  uid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

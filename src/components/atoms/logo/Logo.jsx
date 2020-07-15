import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import logo from './logo-civicactions.png';
import logo2x from './logo-civicactions2x.png';

const Logo = ({ siteTitle }) => {
  const srcset = `${logo} 1x, ${logo2x} 2x`;

  return (
    <Link to="/" className="logo">
      <img
        src={logo}
        srcSet={srcset}
        alt={siteTitle}
        retina_logo_url={logo2x}
        className="logo__image"
      />

      <span>
        {siteTitle}
      </span>
    </Link>
  );
};

Logo.propTypes = {
  siteTitle: PropTypes.string,
};

Logo.defaultProps = {
  siteTitle: 'Front-End Knowledgebase',
};

export default Logo;

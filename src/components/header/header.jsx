import React from 'react';
import PropTypes from 'prop-types';
import '../../sass/components/header.scss';
import Logo from '../atoms/logo/Logo';
import HeaderBg from './background_bg-hero.png';

const Header = ({ siteTitle }) => (
  <header className="site-header" style={{ backgroundImage: `url(${HeaderBg})` }}>
    <div className="site-header__inner">
      <h1>
        <Logo siteTitle={siteTitle} />
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Front-End Knowledgebae',
};

export default Header;

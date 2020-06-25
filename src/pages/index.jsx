import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to the Civic Actions Front-End Playbook.</h1>
    <div>
      Whether you’re starting a new project or looking for inspiration, you’ve come to the
      right place. (...Add some more details here about how to use the playbook.)
    </div>
    <div>
      <Link to="/about/">About this knowledge-base.</Link>
    </div>
    <p>To get started, search for a topic or explore the sections listed below.</p>
    <h2>Top level pages:</h2>
    <ul>
      <li><Link to="/drupal-theming/">Drupal Theming</Link></li>
      <li><Link to="/accessibility/">Accessibility</Link></li>
      <li><Link to="/javascript-and-js-frameworks/">Javascript & JS Frameworks</Link></li>
      <li><Link to="/css-sass/">CSS/SASS</Link></li>
      <li><Link to="/design-systems-and-style-guides/">Design Systems & Style Guides</Link></li>
      <li><Link to="/component-library/">Component Library</Link></li>
      <li><Link to="/testing/">Testing</Link></li>
      <li><Link to="/recipes/">Recipes Landing page</Link></li>
      <li><Link to="/assets/">Assets</Link></li>
      <li><Link to="/projects/">Projects</Link></li>
    </ul>
  </Layout>
);

export default IndexPage;

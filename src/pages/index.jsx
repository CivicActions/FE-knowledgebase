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
      <li><Link to="/component-library/">Component Library</Link></li>
      <li><Link to="/recipes/">Recipes Landing page</Link></li>
    </ul>
  </Layout>
);

export default IndexPage;

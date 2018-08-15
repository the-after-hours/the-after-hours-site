import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Footer from '../components/footer';
import Header from '../components/header';
import './index.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'A collection of passion projects developed during the after huors.' },
        { name: 'keywords', content: 'webdev, javascript, es6, projects, github, opensource, open-source, foss, free, software, engineering, programming, code, web-design, design, development, freelance' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />

    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>

    <Footer data={'stuff'} />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

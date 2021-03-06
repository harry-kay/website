import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import config from 'content/meta/config';

import Footer from '../components/Footer';
import About from '../components/About';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Seo from '../components/Seo';

const AboutPage = props => {
  const {
    data: { introImage, consultingImage },
  } = props;

  const { siteUrl, siteDescription, siteLanguage } = config;

  return (
    <Layout>
      <Article>
        <Heading title="ABOUT ME" />
        <About
          images={{
            intro: introImage,
            consulting: consultingImage,
          }}
        />
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={`About | ${siteDescription}`}
        description={siteDescription}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const query = graphql`
  query {
    introImage: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    consultingImage: file(relativePath: { eq: "consulting2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

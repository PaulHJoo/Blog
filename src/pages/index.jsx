import React from 'react'
import { graphql } from "gatsby";
import "normalize.css";

import Layout from "../components/layout";
import PostList from "../components/post-list";

import "./index.scss";

import "../style/colour.scss";
import "../style/cursor.scss";
import "../style/opacity.scss";
import "../style/overflow.scss";
import "../style/padding-margins.scss";
import "../style/position.scss";
import "../style/prismjs-light.scss";
import "../style/prismjs-dark.scss";
import "../style/theme.scss";
import "../style/text.scss";
import "../style/sizing.scss";

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout 
      isPost={false}
      keywords={"technology, blog"}>
      <div className="display-inline-block">
        <PostList edges={edges} />
      </div>
      <div className="mail-div">
      </div>
    </Layout>
  );
};

export default IndexPage

export const postListQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 3) {
            edges {
                node {
                    id
                    frontmatter {
                        date
                        excerpt
                        path
                        title
                        featureImage {
                          id
                          childImageSharp {
                            sizes(maxWidth: 1200) {
                              ...GatsbyImageSharpSizes_tracedSVG
                            }
                          }
                        }
                    }
                }
            }
        }
    }
`;
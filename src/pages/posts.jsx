import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import "./posts.scss";

const Posts = ({ data }) => {
    const { edges } = data.allMarkdownRemark;

    const postList = edges.map(({ node }) => {
        const { frontmatter } = node;

        return (
            <div key={node.id} className="margin-b-10">
                <Link to={frontmatter.path}>
                    <Img className="thumbnail display-inline-block" sizes={frontmatter.featureImage.childImageSharp.sizes} />
                </Link>
                <div className="display-inline-block title-parent overflow-hidden">
                    <Link to={frontmatter.path} className="text-s text-no-decor margin-zero title-child hover-border padding-10">
                        {frontmatter.title}
                    </Link>
                </div>
            </div>
        )
    });

    return (
        <Layout
            isPost={false}
            title="Posts">
            <p className="text-m text-light margin-t-zero">
                Posts
            </p>
            {postList}
        </Layout>
    );
}

export const postQuery = graphql`
    query {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
        )
        {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        path
                        featureImage {
                            id
                            childImageSharp {
                              sizes(maxWidth: 250) {
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

export default Posts;
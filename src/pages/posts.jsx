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
                <Img className="thumbnail display-inline-block" sizes={frontmatter.featureImage.childImageSharp.sizes} />
                <div className="display-inline-block title-parent">
                    <Link to={frontmatter.path}>
                        <p className="text-s text-bold margin-zero title-child link-hover-colour">
                            { frontmatter.title }
                        </p>
                    </Link>
                </div>
            </div>
        )
    });

    return (
        <Layout isPost={false}>
            <p className="text-m text-bold margin-t-zero">
                Posts
            </p>
            { postList }
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
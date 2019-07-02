import React from "react";
import "normalize.css";

import { graphql } from "gatsby";

import Layout from "../components/layout";
import "./blog-template.scss";

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

const BlogTemplate = ({ data }) => {
    const { frontmatter, html } = data.markdownRemark;

    return (
        <Layout
            isPost={true}
            title={frontmatter.title}
            description={frontmatter.excerpt}
            keywords={frontmatter.keywords}>
            <div>
                <p className="text-m text-light margin-t-zero">
                    {frontmatter.title}
                </p>
                <p>{frontmatter.displayDate}</p>

                <div>
                    <div 
                    className="reading-text"
                    dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </div>
        </Layout>
    );
};

export const blogQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                displayDate
                title
                excerpt
                keywords
            }
        }
    }
`;

export default BlogTemplate;
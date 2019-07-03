import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import TwitterIcon from "../components/icons/twitter-icon";
import GitHubIcon from "../components/icons/github-icon";
import LinkedInIcon from "../components/icons/linkedin-icon";
import SquareIcon from "../components/icons/square-icon";
import EmailIcon from "../components/icons/email-icon";

const About = ({ data }) => {
    const { file } = data;
    return (
        <Layout
            isPost={false}
            title="About">
            <p className="text-m text-light margin-t-zero">
                About
            </p>
            <Img className="width-300 margin-l-r-auto" sizes={file.childImageSharp.sizes} />
            <div className="reading-text">
                <p>
                    Hi! I'm Paul.
            </p>
                <p>
                    A software engineer specializing in full-stack web development. <br />
                    Currently, I'm working in Sydney, AU as a Consultant.
            </p>
                <p>
                    —
            </p>
                <p>
                    As software engineers do, I enjoy programming. <br />
                    It gets you engaged, you solve problems, you can see Hagrid calling you a wizard in the corner of your eye as you type. It's fun. <br />
                    However, technology doesn't exist in a vacuum. It exists in the real world where it has to solve real problems. <br />
                    And when you're talking about technology to a peer, technical or not, you'll often run into either of two problems.
            </p>
                <p>
                    - As you explain, you realise they don't understand anything you're saying. <br />
                    - As you explain, you realise you don't understand anything you're saying.
            </p>
                <p>
                    Nobody is to blame here. Technology is a sandcastle built atop another sandcastle on a mountain - in outer space. <br />
                    Abstraction as a concept was created so that we wouldn't have to conquer every level of this nightmare clown castle just to get started. <br />
                    That being said, I like exploring this nightmare clown castle. <br />
                    So, on this blog I'd like to take you with me to explore this castle - to understand it better. <br />
                    Hopefully afterwards, we can explain things in a way where we don't confuse the other party and ourselves.
            </p>
            </div>
            <div className="padding-b-10">
                <div className="display-inline-block">
                    <TwitterIcon href="https://twitter.com/PaulHJoo" size="small" />
                </div>
                <a href="https://twitter.com/PaulHJoo" className="display-inline-block margin-l-10 margin-zero top-negative-02em position-relative hover-bottom-border text-no-decor">
                    Twitter - @PaulHJoo
                </a>
            </div>
            <div className="padding-b-10">
                <div className="display-inline-block">
                    <GitHubIcon href="https://github.com/PaulHJoo" size="small" />
                </div>
                <a href="https://github.com/PaulHJoo" className="display-inline-block margin-l-10 margin-zero top-negative-02em position-relative hover-bottom-border text-no-decor">
                    GitHub - PaulHJoo
                </a>
            </div>
            <div className="padding-b-10">
                <div className="display-inline-block">
                    <LinkedInIcon href="https://www.linkedin.com/in/devpauljoo/" size="small" />
                </div>
                <a href="https://www.linkedin.com/in/devpauljoo/" className="display-inline-block margin-l-10 margin-zero top-negative-02em position-relative hover-bottom-border text-no-decor">
                    LinkedIn
                </a>
            </div>
            <div className="padding-b-10">
                <div className="display-inline-block">
                    <SquareIcon href="" size="small" />
                </div>
                <a href="www.google.com" className="display-inline-block margin-l-10 margin-zero top-negative-02em position-relative hover-bottom-border text-no-decor">
                    Profile
                </a>
            </div>
            <div className="padding-b-10">
                <div className="display-inline-block">
                    <EmailIcon size="small" />
                </div>
                <p className="display-inline-block margin-l-10 margin-zero top-negative-02em position-relative">
                    Email - dev.pauljoo@gmail.com
                </p>
            </div>
        </Layout>
    );
}

export default About;

export const aboutQuery = graphql`
    query AboutQuery {
        file(relativePath: { eq: "profile.png" }) {
            childImageSharp {
                sizes(maxWidth: 300) {
                    ...GatsbyImageSharpSizes_tracedSVG
                }
            }
        }
    }
`;
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
    console.log(file);
    return (
        <Layout isPost={false}>
            <p className="text-m text-light margin-t-zero">
                About
            </p>
            <Img className="width-300 margin-l-r-auto" sizes={file.childImageSharp.sizes} />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In ut ipsum ut arcu sodales volutpat.
                Aenean a risus sit amet nulla efficitur ornare.
                Phasellus sit amet nisi non diam efficitur varius.
                Mauris sit amet est nec magna rhoncus pharetra.
                Suspendisse porttitor odio magna, a pellentesque nisl porta id.
                Mauris nec sagittis libero, et faucibus elit.
                In hac habitasse platea dictumst. 
            </p>
            <p>
                Etiam ut massa tristique, mattis diam in, ullamcorper justo.
                Donec quis orci faucibus elit sodales iaculis.
                In finibus blandit iaculis.
                Pellentesque posuere condimentum odio vehicula rhoncus.
                Donec vulputate lectus vitae augue bibendum, id tempus eros elementum.
                Donec vel lacus condimentum, vulputate mi pretium, maximus erat.
                Fusce ullamcorper sem sit amet lorem interdum hendrerit.
                Nunc at condimentum enim, ut faucibus elit.
                Fusce lorem ante, rhoncus at mi non, pulvinar dignissim nibh.
                Suspendisse sit amet finibus urna, a faucibus sem.
                Vivamus rhoncus ante ultrices ex congue, quis feugiat orci vulputate.
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Aenean consectetur enim vitae enim tempus, eget faucibus ligula semper.
                Nulla velit mi, finibus id faucibus id, scelerisque eget libero.
            </p>
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
                <a className="display-inline-block margin-l-10 margin-zero top-negative-02em position-relative hover-bottom-border text-no-decor">
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
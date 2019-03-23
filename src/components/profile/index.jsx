import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

// import GitHubIcon from "../icons/github-icon";
// import LinkedInIcon from "../icons/linkedin-icon";
// import TwitterIcon from "../icons/twitter-icon";
// import SquareIcon from "../icons/square-icon";

const Profile = ({ data }) => {
    const { file } = data;
    return (
        <div>
            <div className="width-300">
                <Img className="width-250 margin-l-r-auto" sizes={file.childImageSharp.sizes} />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lectus tincidunt, aliquam est at, molestie nibh.
                    Pellentesque molestie sapien mattis lectus tristique, sit amet finibus sapien vulputate.
                    Mauris condimentum erat id leo elementum placerat.
                    Cras volutpat libero at ultrices suscipit.
                </p>
                <div>
                    {/* <GitHubIcon href="https://github.com/PaulHJoo" />
                    <LinkedInIcon href="https://www.linkedin.com/in/devpauljoo/" />
                    <TwitterIcon href="https://twitter.com/PaulHJoo" />
                    <SquareIcon href="" /> */}
                </div>
            </div>
        </div>
    );
};

export default () => (
    <StaticQuery
        query={graphql`
        query ProfileQuery {
            file(relativePath: { eq: "profile.png" }) {
                childImageSharp {
                    sizes(maxWidth: 280) {
                        ...GatsbyImageSharpSizes_tracedSVG
                    }
                }
            }
        }
    `}
        render={data =>
            <Profile data={data} />
        }
    />
)
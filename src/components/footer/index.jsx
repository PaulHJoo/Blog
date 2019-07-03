import React from "react";

import GitHubSquareIcon from "../icons/github-square-icon";
import LinkedInSquareIcon from "../icons/linkedin-square-icon";
import TwitterSquareIcon from "../icons/twitter-square-icon";
import SquareIcon from "../icons/square-icon";
import "./footer.scss";
import RssSquareIcon from "../icons/rss-square-icon";

const Footer = () => {

    return (
        <footer className="width-90 margin-l-r-auto">
            <div className="footer-overline"></div>
            <div className="footer height-150">
                <div className="text-center">
                    <GitHubSquareIcon href="https://github.com/PaulHJoo" size="medium" />
                    <LinkedInSquareIcon href="https://www.linkedin.com/in/paulhjoo/" size="medium" />
                    <TwitterSquareIcon href="https://twitter.com/PaulHJoo" size="medium" />
                    <RssSquareIcon href="/rss.xml" size="medium" />
                    <SquareIcon href="" size="medium" />
                </div>
                <p className="footer-text text-center">
                    Copyright &copy; 2019 by Paul H. Joo. <br />
                    The opinions expressed herein are my own and do not represent those of my employer or any other third-party views in any way.
            </p>
            </div>
        </footer>
    );
}

export default Footer;
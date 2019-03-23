import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const PostCard = ({ frontmatter }) => {
    const { excerpt, title, path, featureImage } = frontmatter;
    const { sizes } = featureImage.childImageSharp;
    return (
        <div className="margin-b-50">
            <Link to={path} className="text-no-decor">
                <p className="text-center text-m link-hover-colour margin-t-zero margin-b-20">
                    {title}
                </p>
            </Link>
            <Link to={path}>
                <Img sizes={sizes} />
            </Link>
            <p>
                {excerpt}
                <Link to={path} className="text-no-decor text-bold link-hover-colour">
                    &nbsp;Read More
                </Link>
            </p>
        </div>
    );
}

export default PostCard;
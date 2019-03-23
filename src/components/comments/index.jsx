import React from "react";
import Disqus from "disqus-react";

const Comments = ({ frontmatter }) => {
    const shortName = "test-chat";
    const config = {
        url: `https://pauljoopj.com${frontmatter.path}`,
        identifier: frontmatter.identifier,
        title: frontmatter.title
    }
    return (
        <div>
            <Disqus.DiscussionEmbed shortname={shortName} config={config} />
        </div>
    );
}

export default Comments;
import React from "react";

import PostCard from "./post-card";

const PostList = ({ edges }) => {
    const posts = edges.map((edge) =>
        <PostCard key={edge.node.id}
            frontmatter={edge.node.frontmatter} />);

    return (
        <div>
            {posts}
        </div>
    );
};

export default PostList;
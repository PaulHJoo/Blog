module.exports = ({ node, actions }) => {
    const { createNodeField } = actions
  
    if (node.internal.type === `MarkdownRemark`) {
      const value = node.frontmatter.path;
      createNodeField({
        name: `slug`,
        node,
        value,
      });
    }
  }
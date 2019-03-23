const path = require('path');

module.exports = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const blogTemplate = path.resolve('src/templates/blog-template.jsx');
        const listOfPostsTemplate = path.resolve('src/templates/post-list-template.jsx');

        resolve(
            graphql(
                `
                {
                    allMarkdownRemark {
                        edges {
                            node {
                                frontmatter {
                                    path
                                }
                            }
                        }
                    }
                }
                `
            ).then(result => {
                if (result.errors) {
                    reject(result.errors);
                }

                const posts = result.data.allMarkdownRemark.edges;

                posts.forEach(({ node }) => {
                    createPage({
                        path: node.frontmatter.path,
                        component: blogTemplate,
                    });
                });

                //Pagination
                // const postsPerPage = 2;
                // const numberOfPages = Math.ceil(posts.length / postsPerPage);

                // Array.from({ length: numberOfPages }).forEach((_, i) => {
                //     createPage({
                //         path: i === 0 ? `/posts` : `/posts/${i + 1}`,
                //         component: listOfPostsTemplate,
                //         context: {
                //             limit: postsPerPage,
                //             skip: i * postsPerPage
                //         }
                //     });
                // });
            })
        )
    })
}
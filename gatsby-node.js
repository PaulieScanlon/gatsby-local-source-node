const MOCK_DATA = require('./content/MOCK_DATA.json');

// Docs for sourceNodes
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#sourceNodes

// Docs for createNode
// https://www.gatsbyjs.com/docs/reference/config-files/actions/#createNode

exports.sourceNodes = ({ actions: { createNode }, createContentDigest }) => {
  MOCK_DATA.forEach((data, index) => {
    createNode({
      ...data,
      id: `post-${index}`,
      internal: {
        type: `post`,
        contentDigest: createContentDigest(data)
      }
    });
  });
};

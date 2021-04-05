const { readdirSync, readFileSync } = require('fs');

// Docs for sourceNodes
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#sourceNodes

// Docs for createNode
// https://www.gatsbyjs.com/docs/reference/config-files/actions/#createNode

exports.sourceNodes = ({ actions: { createNode }, createContentDigest }) => {
  const DIR = './content';

  files = readdirSync(DIR);

  files.forEach((file, index) => {
    // ignore files starting with a dot
    if (!/^\..*/.test(file)) {
      let data = JSON.parse(readFileSync(`${DIR}/${file}`));

      createNode({
        ...data,
        id: `post-${index}`,
        internal: {
          type: `post`,
          contentDigest: createContentDigest(data)
        }
      });
    }
  });
};

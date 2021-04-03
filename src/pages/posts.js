import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Posts = () => {
  const {
    allPost: { nodes }
  } = useStaticQuery(graphql`
    query {
      allPost {
        nodes {
          title
          gatsbyPath(filePath: "/posts/{post.title}")
        }
      }
    }
  `);

  return (
    <main>
      <h1>Posts Page</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <p>
        Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae,
        nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci
        vehicula condimentum. Curabitur in libero ut massa volutpat convallis.
        Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.
      </p>
      <h2>All Posts</h2>
      <ul>
        {nodes.map((node, index) => {
          const { title, gatsbyPath } = node;
          return (
            <li key={index}>
              <Link to={gatsbyPath}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Posts;

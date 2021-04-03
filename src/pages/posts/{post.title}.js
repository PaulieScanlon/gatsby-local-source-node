import React from 'react';
import { graphql, Link } from 'gatsby';

const PostPage = ({
  data: {
    post: { title, date, body }
  }
}) => {
  return (
    <main>
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Back To Posts</Link>
        </li>
      </ul>
      <p>{date}</p>
      <p>{body}</p>
    </main>
  );
};

export const query = graphql`
  query($id: String) {
    post(id: { eq: $id }) {
      id
      title
      body
      date
    }
  }
`;

export default PostPage;

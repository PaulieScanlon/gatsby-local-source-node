import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <main>
      <h1>Index Page</h1>
      <ul>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
      <p>
        Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae,
        nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci
        vehicula condimentum. Curabitur in libero ut massa volutpat convallis.
        Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.
      </p>
    </main>
  );
};

export default IndexPage;

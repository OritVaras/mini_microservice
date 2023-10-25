import React from 'react';
import PostCreate from './postsCreate';
import PostsList from './postsList';

const App = () => {
  return (
    <div className="container">
      <h1>Create Post!!!</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostsList />
    </div>
  );
};

export default App;

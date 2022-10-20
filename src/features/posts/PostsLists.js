import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

import React from "react";

const PostsLists = () => {
  //We want all the posts from the our state in postsSlice.js
  const posts = useSelector(selectAllPosts);

  // const orderedPosts = posts
  //   .slice()
  //   .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsLists;

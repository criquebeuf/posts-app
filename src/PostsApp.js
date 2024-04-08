import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from './redux/slices/postsSlice';
import AddPost from './components/AddPost.js';
import PostsList from './components/PostsList.js';

export default function PostsApp() {
  const posts = useSelector((state) => state.posts); // Assuming `posts` is the state slice name
  const dispatch = useDispatch();

  // Dispatch addPost action directly from AddPost component
  function handleDeletePost(postId) {
    dispatch(deletePost({ id: postId }));
  }

  return (
    <>
      <AddPost />
      <PostsList posts={posts} onDeletePost={handleDeletePost} />
    </>
  );
}

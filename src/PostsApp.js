import { initialPosts } from './data.js'
import { useState } from 'react'
import AddPost from './Posts/AddPost.js';
import PostsList from './Posts/PostsList.js';

import { useDispatch } from 'react-redux';
import { deletePost } from './redux/slices/postsSlice';

let nextId = 4

export default function PostsApp() {
  const [posts, setPosts] = useState(initialPosts)

  // used for redux purposes
  const dispatch = useDispatch();


  function handleAddPost(title, description) {
    setPosts([
      ...posts,
      {id: nextId++,
      title: title,
      description: description}
    ])
  }

  function handleDeletePost(postId) {
    setPosts(
      posts.filter(post => post.id !== postId)
    )
    dispatch(deletePost({ id: Date.now() }));
  }

  return (
    <>
    <AddPost
    onAddPost={handleAddPost}
    />
    <PostsList
    posts={posts}
    onDeletePost={handleDeletePost}
    />
    </>
  )
}

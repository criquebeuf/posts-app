import { initialPosts } from './data.js'
import { useState } from 'react'
import AddPost from './Posts/AddPost.js';
import PostsList from './Posts/PostsList.js';

let nextId = 4

export default function PostsApp() {
  const [posts, setPosts] = useState(initialPosts)

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

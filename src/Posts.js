import { initialPosts } from './data.js'
import { useState } from 'react'

export default function PostsApp() {
  const [posts, setPosts] = useState(initialPosts)

  let nextId = 4

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

function AddPost({onAddPost}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleTitle(e) {
    setTitle(e.target.value)
  }

  function handleDescription(e) {
    setDescription(e.target.value)
  }

  return (
      <>
      <h1>New Post</h1>
      <div className="input-block">
        <div>
          <input
          placeholder="Title"
          value={title}
          onChange={handleTitle}
          />
        </div>
      </div>

      <div className="input-block">
        <div>
        <input
        placeholder="Content"
        value={description}
        onChange={handleDescription}
        className='description'
        />
        </div>
      </div>

      <div>
        <button onClick={() => {
          setTitle('');
          setDescription('');
          onAddPost(title, description)
        }}>
        Add
        </button>
      </div>
      </>
  )
}

function Post({post, onDeletePost}) {
  const [likes, setLikes] = useState(false);

  function handleLikeClick() {
    setLikes(!likes);
  }

  function handleCommentClick() {
    // to do
  }

  return (
    <>
      <div className='post'>
      <div className='post-actions'>
          <button onClick={() => onDeletePost(post.id)}>
          x
          </button>
        </div>
        <div className='title'>{post.title}</div>
        <div>{post.description}</div>
        <div className='post-actions'>
          <button className='like' onClick={handleLikeClick}>
            {likes ? <span style={{color: 'pink'}}>❤</span> : <span style={{color: 'white'}}>❤</span>}
          </button>
          <button className='like' onClick={handleCommentClick}>
            Comment
          </button>
        </div>
      </div>
    </>
  )
}

function PostsList({posts, onDeletePost}) {
  return (
    <>
    <h1>Posts ({posts.length}) </h1>
    <ul>
      {posts.map(post => (
        <Post
        key={post.id}
        post={post}
        onDeletePost={onDeletePost}
        />
      ))}
    </ul>
    </>
  )
}

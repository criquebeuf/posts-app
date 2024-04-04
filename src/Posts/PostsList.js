import { useState } from 'react';

import { CommentsProvider, useComments } from '../Comments/CommentsContext';
import CommentsList from '../Comments/CommentsList';
import AddComment from '../Comments/AddComment';

import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { likePost } from '../redux/slices/postsSlice';

export default function PostsList({posts, onDeletePost}) {
  return (
    <>
    <h1>Posts ({posts.length}) </h1>
    <ul>
      {posts.map(post => (
        <CommentsProvider>

        <Post
          key={post.id}
          post={post}
          onDeletePost={onDeletePost}
        />

        </CommentsProvider>
      ))}
    </ul>
    </>
  )
}

function Post({post, onDeletePost}) {
  const [likes, setLikes] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const comments = useComments();
  console.log(post);

  // used for redux purposes
  const dispatch = useDispatch();

  function handleLikeClick() {
    setLikes(!likes);
    dispatch(likePost({ id: Date.now() }));
  }

  function handleCommentClick() {
    setShowComments(!showComments);
  }

  return (
    <>
      <div className='post'>
        <div className='post-actions'>
          <span className="delete" onClick={() => onDeletePost(post.id)}>x</span>
        </div>
        <div className='title'>{post.title}</div>
        <div className='description'>{post.description}</div>
        <div className='post-actions'>
          <button className='like' onClick={handleLikeClick}>
            {likes ? <span style={{color: 'pink'}}>❤</span> : <span style={{color: 'white'}}>❤</span>}
          </button>
          <button className='like' onClick={handleCommentClick}>
            {comments ? (comments.length === 0 ? 'No comments' : comments.length + ' comment(s)') : 'Comment'}
          </button>
        </div>
        <div className={showComments ? 'visible' : 'hidden'}>
          <CommentsList />
          <AddComment />
        </div>
      </div>
    </>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onDeletePost: PropTypes.func.isRequired,
};

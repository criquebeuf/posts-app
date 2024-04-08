import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { likePost } from '../redux/slices/postsSlice';
import AddComment from './AddComment';

export default function PostsList({ posts, onDeletePost, postsCount }) {
  return (
    <>
      <h1>Posts ({posts.length})</h1>
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
  );
}

function Post({ post, onDeletePost }) {
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();

  const handleLikeClick = () => dispatch(likePost({ id: post.id }));
  const isLiked = useSelector(state => state.posts.find(p => p.id === post.id)?.likes);

  const commentsButtonLabel = post.comments.length > 1 ? `${post.comments?.length} comments` :
                              post.comments?.length ?? 0 === 1 ? "1 comment" :
                              "No comments";

  return (
    <div className='post'>
      <div className='post-actions'>
        <span className="delete" onClick={() => onDeletePost(post.id)}>x</span>
      </div>
      <div className='title'>{post.title}</div>
      <div className='description'>{post.description}</div>
      <div className='post-actions'>
        <button className='like-or-comment' onClick={handleLikeClick}>
          {isLiked ? <span style={{color: 'pink'}}>❤</span> : <span style={{color: 'white'}}>❤</span>}
        </button>
        <button className='like-or-comment' onClick={() => setShowComments(!showComments)}>
          {commentsButtonLabel}
        </button>
      </div>
      {showComments && (
        <>
          <div>
            {post.comments.map((comment, index) => (
              <div className = "comment" key={index}>{comment.content}</div>
            ))}
          </div>
          <AddComment postId={post.id} />

        </>
      )}
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })),
  }).isRequired,
  onDeletePost: PropTypes.func.isRequired,
};

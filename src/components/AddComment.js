import { useDispatch } from 'react-redux';
import { addComment } from '../redux/slices/postsSlice';
import { useInputState } from '../hooks/useInputState';

export default function AddComment({ postId }) {
  const [commentContent, handleCommentChange, resetComment] = useInputState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    if (!commentContent.trim()) return; // Avoid adding empty comments

    dispatch(addComment({ postId, comment: commentContent }));
    resetComment('');
  };

  return (
    <>
      <input
        className="comment-input"
        placeholder="Write your comment here..."
        value={commentContent}
        onChange={handleCommentChange}
      />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
}

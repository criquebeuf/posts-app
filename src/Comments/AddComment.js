import React, { useState } from 'react';
import { useAddComment } from './CommentsContext';

import { useDispatch } from 'react-redux';
import { addCommentToPost } from '../redux/slices/commentsSlice';

export default function AddComment() {
  const [content, setContent] = useState('');
  const addComment = useAddComment();

  // used for redux purposes
  const dispatch = useDispatch();

  const handleSubmit = () => {
    addComment(content);
    setContent('');
    // redux
    dispatch(addCommentToPost({ id: Date.now(), content }));
  };

  return (
    <>
      <input
        className="comment-input"
        placeholder="Write your comment here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
}

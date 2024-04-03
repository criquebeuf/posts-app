import React, { useState } from 'react';
import { useAddComment } from './CommentsContext';

export default function AddComment() {
  const [content, setContent] = useState('');
  const addComment = useAddComment();

  const handleSubmit = () => {
    addComment(content);
    setContent('');
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

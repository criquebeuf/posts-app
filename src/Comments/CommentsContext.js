import { createContext, useContext, useState } from 'react';
import { initialComments } from '../data.js';

const CommentsContext = createContext();
const UpdateCommentsContext = createContext();

let nextId = 2;

export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState(initialComments);

  const addComment = (content) => {
    const newComment = {
      id: nextId++,
      content,
    };
    setComments(currentComments => [...currentComments, newComment]);
  };

  return (
    <CommentsContext.Provider value={comments}>
      <UpdateCommentsContext.Provider value={addComment}>
        {children}
      </UpdateCommentsContext.Provider>
    </CommentsContext.Provider>
  );
};

export const useComments = () => useContext(CommentsContext);
export const useAddComment = () => useContext(UpdateCommentsContext);

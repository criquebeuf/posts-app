import { createContext, useContext, useReducer } from 'react';
import { initialComments } from '../data.js'


const CommentsContext = createContext(null);
const CommentsDispatchContext = createContext(null);

export function CommentsProvider ({children}) {
  const [comments, dispatch] = useReducer (
    commentsReducer,
    initialComments
  );

  return (
    <CommentsContext.Provider value ={comments}>
      <CommentsDispatchContext.Provider value={dispatch}>
        {children}
      </CommentsDispatchContext.Provider>
    </CommentsContext.Provider>
  )
}

export function useComments() {
  return useContext(CommentsContext);
}

export function useCommentsDispatch() {
  return useContext(CommentsDispatchContext);
}

function commentsReducer(comments, action) {
  switch (action.type) {
    case 'added': {
      return [...comments, {
        id: action.id,
        content: action.content,
      }];
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

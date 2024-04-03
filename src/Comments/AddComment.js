import { useState } from 'react';
import { useCommentsDispatch } from './CommentsContext.js';

export default function AddComment() {
 const [content, setContent] = useState('');
 const dispatch = useCommentsDispatch();

 return (
  <>
    <input
      className="comment-input"
      placeholder="Write your comment here..."
      value={content}
      onChange={e => setContent(e.target.value)}
    />
    <button onClick={()=> {
      setContent('')
      dispatch({
        type:'added',
        id: nextId++,
        content: content
      })
    }}>Add</button>
  </>
 )
}
let nextId = 2;

import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addPost } from '../redux/slices/postsSlice';

export default function AddPost({onAddPost}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // used for redux purposes
  const dispatch = useDispatch();

  function handleTitle(e) {
    setTitle(e.target.value)
  }

  function handleDescription(e) {
    setDescription(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(addPost({ id: Date.now(), title }));
    setTitle('');
  };

  return (
      <>
      <h1>New Post</h1>

      <div className="input-block">
        <div>
          <input
          placeholder="Title"
          value={title}
          onChange={handleTitle}
          className='input-title'
          />
        </div>
      </div>

      <div className="input-block">
        <div>
          <input
          placeholder="Content"
          value={description}
          onChange={handleDescription}
          className='input-description'
          />
        </div>
      </div>

      <div>
        <button onClick={() => {
          setTitle('');
          setDescription('');
          onAddPost(title, description)
          handleSubmit()
        }}>
        Add
        </button>
      </div>
      </>
  )
}

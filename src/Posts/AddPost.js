import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/slices/postsSlice';

export default function AddPost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const handleSubmit = () => {
    // cannot add an empty post
    if (!title.trim() || !description.trim()) return;
    dispatch(addPost({ id: Date.now(), title, description, likes: false }));
    setTitle('');
    setDescription('');
  };

  return (
    <>
      <h1>New Post</h1>
      <div className="input-block">
        <input
          placeholder="Title"
          value={title}
          onChange={handleTitle}
          className='input-title'
        />
      </div>
      <div className="input-block">
        <input
          placeholder="Content"
          value={description}
          onChange={handleDescription}
          className='input-description'
        />
      </div>
      <button onClick={handleSubmit}>Add</button>
    </>
  );
}

import { useDispatch } from 'react-redux';
import { addPost } from '../redux/slices/postsSlice';
import { useInputState } from '../hooks/useInputState';

export default function AddPost() {
  const dispatch = useDispatch();
  const [title, handleTitleChange, resetTitle] = useInputState('');
  const [description, handleDescriptionChange, resetDescription] = useInputState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // To prevent form submission from reloading the page
    if (!title.trim() || !description.trim()) return;

    dispatch(addPost({ id: Date.now(), title, description, likes: false, comments: [] }));
    resetTitle();
    resetDescription();
  };

  return (
    <>
      <h1>New Post</h1>
      <div className="input-block">
        <input
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          className='input-title'
        />
      </div>
      <div className="input-block">
        <input
          placeholder="Content"
          value={description}
          onChange={handleDescriptionChange}
          className='input-description'
        />
      </div>
      <button onClick={handleSubmit}>Add</button>
    </>
  );
}

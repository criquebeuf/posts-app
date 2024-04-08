import { useState } from 'react';

// in order to avoid repetition, creating the custom hook
// it will be integrated into your AddPost and AddComment components to manage the input value, handle changes to it, and provide a way to reset it.
export function useInputState(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return [value, handleChange, reset];
}

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts.push(action.payload);
    },
    likePost: (state, action) => {
      state.posts.push(action.payload);
    }
  },
});

export const { addPost } = postsSlice.actions;
export const { deletePost } = postsSlice.actions;
export const { likePost } = postsSlice.actions;

export default postsSlice.reducer;

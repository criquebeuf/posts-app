// createSlice automatically generates the reducer
import { createSlice } from '@reduxjs/toolkit';
import { initialPosts } from '../../data.js';

// In this app, the initial state is preloaded with dummy posts but could be an empty array []
const initialState = initialPosts

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload)
    },
    deletePost: (state, action) => {
      const index = state.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    likePost: (state, action) => {
      const index = state.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state[index].likes = !state[index].likes;
      }
    },
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      const post = state.find(post => post.id === postId);
      if (post) {
        const newCommentId = Date.now();
        post.comments.push({ id: newCommentId, content: comment });
      }
    },
  }
});

// Export the action creators
export const { addPost, deletePost, likePost, addComment } = postsSlice.actions;

// // Export the reducer
export default postsSlice.reducer;

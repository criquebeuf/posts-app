// createSlice automatically generates the reducer
import { createSlice } from '@reduxjs/toolkit';
import { initialPosts } from '../../data.js';

// Initial state is preloaded with dummy posts but could be an empty array []
const initialState = initialPosts

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Action to add a post
    addPost: (state, action) => {
      state.push(action.payload)
    },
    // Action to delete a post by ID
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
      const { postId, comment } = action.payload; // Extract postId and comment
      const post = state.find(post => post.id === postId);
      if (post) {
        // Generate a new comment ID
        const newCommentId = Date.now();
        // Add the new comment with the generated ID
        post.comments.push({ id: newCommentId, content: comment });
      }
    },
  }
});

// Export the action creators
export const { addPost, deletePost, likePost, addComment } = postsSlice.actions;

// Export the reducer
export default postsSlice.reducer;

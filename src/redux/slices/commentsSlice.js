import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addCommentToPost: (state, action) => {
      state.comments.push(action.payload);
    },
  },
});

export const { addCommentToPost } = commentsSlice.actions;

export default commentsSlice.reducer;

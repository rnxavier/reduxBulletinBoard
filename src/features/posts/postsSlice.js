import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
  },
  { id: "2", title: "Slices", content: "Slices of pizza!" },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    //reducer function with current state and action, payload = form data we are sending
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;

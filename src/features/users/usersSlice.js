import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "John Smith" },
  { id: "2", name: "Jane Bloggs" },
  { id: "3", name: "Lucy Charles" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //reducer function with current state and action, payload = form data we are sending
  },
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;

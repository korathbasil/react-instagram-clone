import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "James Bond",
    age: 55,
  },
  reducers: {
    setUser: () => {},
  },
});

export default userSlice.reducer;

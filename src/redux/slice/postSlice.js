import { createSlice } from "@reduxjs/toolkit";
import { fetchPost, fetchSinglePost } from "./postService";



const apiSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
    singlePost: [],
    loading: false,
    error: null
  },
  extraReducers: {
    [fetchPost.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = action.payload;
    },
    [fetchPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },


    //SinglePost

    [fetchSinglePost.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSinglePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.singlePost = action.payload;
    },
    [fetchSinglePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export default apiSlice.reducer;

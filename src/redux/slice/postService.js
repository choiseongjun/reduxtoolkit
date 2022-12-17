import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetching all data from Api
// export const fetchPost = createAsyncThunk("fetchPost", async () => {
//   return (await axios.get("https://jsonplaceholder.typicode.com/posts")).data;
// });
export const fetchPost = createAsyncThunk("post/getAllPost", async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/`);
  return res.data;
});
 


//To fetch single post
export const fetchSinglePost = createAsyncThunk("fetchPost", async ({ id }) => {
  return (await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`))
    .data;
});

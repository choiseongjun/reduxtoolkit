import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../redux/slice/postService";
const Post = () => {

  const dispatch = useDispatch();
  const { post } = useSelector((state) => (state.post));

  useEffect(() => {
      dispatch(fetchPost());
  }, []);

  return (
    <div>
         {post &&
        post.map((item, index) => (
          <div key={index}>
            <h1>
              <span>Post Id: </span>
              {item.id}
            </h1>
            <h2>
              <span>Title: </span>
              {item.title}
            </h2>
            <p>
              <span>Description: </span>
              {item.body}
            </p>
              <button>Details</button>
          </div>
        ))}
    </div>
  )
}

export default Post
import { GET_POSTS, POST_ERROR } from "../types/types";
import axios from "axios";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/posts`);
    dispatch({
      type: GET_POSTS,
      payload: res.data.slice(0, 6),
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: error,
    });
  }
};

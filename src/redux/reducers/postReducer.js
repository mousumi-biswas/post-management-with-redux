import { CREATE_POST, GET_POSTS, POST_ERROR } from "../types/types";

let initialState = {
  posts: [],
  loading: true,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case POST_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

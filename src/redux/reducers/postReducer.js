import {
  ADD_CONTENT,
  CHANGE_SORT,
  DELETE_CONTENT,
  LOAD_CONTENT,
  LOAD_SINGLE_POST,
  UPDATE_CONTENT,
} from '../actionTypes/actionTypes';

const initialState = {
  posts: [],
  post: {},
  sort: 0,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTENT:
      return {
        ...state,
        posts: [...action.payload],
      };
    case LOAD_SINGLE_POST:
      return {
        ...state,
        post: { ...action.payload },
      };
    case ADD_CONTENT:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case UPDATE_CONTENT:
      return {
        ...state,
        post: action.payload,
      };
    case DELETE_CONTENT:
      return {
        ...state,
        posts: [...state.posts.filter((post) => post._id !== action.payload)],
      };
    case CHANGE_SORT:
      return {
        ...state,
        sort: parseInt(action.payload),
      };
    default:
      return state;
  }
};

export default postReducer;

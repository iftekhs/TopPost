import {
  ADD_CONTENT,
  CHANGE_SORT,
  DELETE_CONTENT,
  LOAD_CONTENT,
  LOAD_SINGLE_POST,
  UPDATE_CONTENT,
} from '../actionTypes/actionTypes';

export const addPost = (post) => {
  return {
    type: ADD_CONTENT,
    payload: post,
  };
};

export const loadPosts = (posts) => {
  return {
    type: LOAD_CONTENT,
    payload: posts,
  };
};

export const deletePost = (id) => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  };
};

export const loadSinglePost = (post) => {
  return {
    type: LOAD_SINGLE_POST,
    payload: post,
  };
};

export const updatePost = (post) => {
  return {
    type: UPDATE_CONTENT,
    payload: post,
  };
};

export const changeSort = (sortOption) => {
  return {
    type: CHANGE_SORT,
    payload: sortOption,
  };
};

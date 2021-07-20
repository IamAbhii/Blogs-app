import { Post, PostActionTypes, } from '../types';

export const setPostAction = (posts: Post[]): PostActionTypes => {
  return {
    type: 'GET_POSTS',
    payload: posts
  };
};
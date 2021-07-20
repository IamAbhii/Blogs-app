import * as io from "io-ts";

export type Post = {
  userId: string;
  id: number;
  title: string;
  body: string;
};

export type GET_POSTS = "GET_POSTS";

export type GetPostsStateType = {
  posts: Post[];
};

export type PostActionTypes = {
  type: GET_POSTS;
  payload: Post[];
};

export const PostType = io.type({
  userId: io.number,
  id: io.number,
  title: io.string,
  body: io.string
});

export const PostArray= io.array(PostType)

export type PostIO = io.TypeOf<typeof PostType>;

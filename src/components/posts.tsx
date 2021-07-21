import React from "react";
import usePost from "../hooks/usePost";
import {pipe} from 'fp-ts/lib/function';
import {foldL} from "../helper";
import PostList from "./postList";

export function Posts() {
  const result = usePost()

  return (
    <div>
      {pipe(
        result,foldL(
        ()=><h1>Loading....</h1>,
        (posts)=><PostList posts={posts}/>,
        ()=><h1>Error....</h1>))
      }
    </div>
  );
}

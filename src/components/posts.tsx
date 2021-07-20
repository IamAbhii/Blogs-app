import React from "react";
import { Post } from "../types";
import usePost from "../hooks/usePost";

export function Posts() {
  const result = usePost()

  if (result.status === "loading") return <h1>Loading ....</h1>;
  if (result.status === "error") return <h1>Error .....</h1>;

  return (
    <div>
      <ul>
        {result.status === "success" &&
        result.data.map((post: Post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}

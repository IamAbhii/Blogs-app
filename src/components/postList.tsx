import React from 'react'
import {Post} from "../types";

type Props={
  posts:Post[]
}

export default function PostList(props:Props){

  return (
    <div>
      <ul>
      {props.posts.map(p=><li key={p.id}><h1>{p.title}</h1></li>)}
      </ul>
    </div>
  )
}
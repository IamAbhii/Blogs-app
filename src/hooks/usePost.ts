import {useQuery} from "react-query";
import {setPostAction} from "../actions/postActions";
import {Post, PostActionTypes, PostArray, PostType} from "../types";
import {useDispatch} from "react-redux";
import {Dispatch} from "react";
import {runDecoder} from "../helper";

const fetchPosts  =async ()=> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0"
  );

  return response.json();
}

export default  function usePost(){
  const result = useQuery<Post[],Error>('post',fetchPosts)
  const dispatch = useDispatch<Dispatch<PostActionTypes>>()


  if(result.status === 'success'){

    //TODO console.log: Remove when done
    console.log('result data ====',result.data);

    const decoded = runDecoder(PostType)(result.data[0])
    console.log('decoded =======',decoded);

    dispatch(setPostAction(result.data))
  }

  return result
}
import {useQuery} from "react-query";
import {setPostAction} from "../actions/postActions";
import {Post, PostActionTypes, PostArray} from "../types";
import {useDispatch} from "react-redux";
import {Dispatch} from "react";
import * as Either from 'fp-ts/lib/Either';


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
    try {
      const decodedResult = PostArray.decode(result.data)

      if(Either.isLeft(decodedResult)){
        //report to sentry
        throw new Error('Invalid data')
      }
      dispatch(setPostAction(decodedResult.right))
    }catch (error){
      console.log('error=====',error);
    }
  }

  return result
}
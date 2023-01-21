import React, { useState,useEffect  } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../../API/PostService';
import { useFetching } from '../../hooks/useFetching';
import Loader from '../UI/Loader/Loader';

const PostIdPage = () => {
  const {id} = useParams();
  const [post,setPost] = useState({});
  const [comments,setComments] = useState([]);
  const [fetchingPostById, isLoadng, error]= useFetching(async(id)=>{
    const response =  await PostService.getById(id);
    setPost(response.data);
  });


  const [fetchingComByPostId, isComLoadng, comError]= useFetching(async(id)=>{
    const response =  await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchingPostById(id);
    fetchingComByPostId(id);
  }, []);
    return (
      isLoadng?
        <Loader/>
        :<div> 
        <h1>You here in the post lol {id}</h1>
        <h2>{post.id}. {post.title}</h2>
        <p>{post.body}</p>
        <h3>Comments:</h3>
        {
          isComLoadng ?
            <Loader/>:
            <div>
              {comments.map(com =>(
                <div key={com.id} style={{marginTop:10}}>
                  <h5>{com.email}</h5>
                  <p>{com.body}</p>
                </div>
              ))}
            </div>
        }
      </div>
      
    );
};

export default PostIdPage;  
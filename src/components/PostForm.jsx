import React,{useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
    const [post,setPost] = useState({
        title:'',
        body:''
      });

      const addNewPost = (e) =>{
        e.preventDefault();
        const newPost = {
            ...post,id:Date.now()
        };
        create(newPost)
        setPost({
          title:'',
          body:''
        })
    
      }
    return (
        <form>
        <MyInput 
          value={post.title}
          type="text" 
          placeholder="Название хуйни" 
          onChange={e => setPost({...post,title:e.target.value})}></MyInput>
        <MyInput 
          value={post.body}
          type="text" 
          placeholder="Описание хуйни"
          onChange={e => setPost({...post,body:e.target.value})}></MyInput>
        <MyButton onClick={addNewPost}>Создать хуйню</MyButton>
      </form>
    );
};

export default PostForm;
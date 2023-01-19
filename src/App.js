import React,{  useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/App.css"
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";

const  App = () => {
  const [posts,setPosts] = useState([
    {id:1, title:"da", body:"z"},
    {id:2, title:"asd", body:"asd"},
    {id:3, title:"zxc 3", body:"2"},
    {id:4, title:"had", body:"3333"}
  ]);
  const [filter,setFilter] = useState({
    sort:'',
    query:''
  })
  const[modal,setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query);



  const removePost =(post) =>{
    setPosts(posts.filter(p => p.id !==post.id));
  };
  const createPost= (newPost)=>{
    setPosts([...posts,newPost])
    setModal(false);
  }

  return (
    <div className="App">
    <MyButton onClick={()=> setModal(true)}>Создать пост</MyButton>
    <MyModal visible={modal}  setVisible={setModal}>
      <PostForm create={createPost}/> 
    </MyModal>
 
        <PostFilter filter={filter} setFilter={setFilter}/>
        <PostList posts={sortedAndSearchedPosts}  title="Список хуйни" remove={removePost}/> 
    </div>
  );
}

export default App;
 
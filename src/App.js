import React,{  useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostList from "./components/PostList";
import "./styles/App.css"
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts,setPosts] = useState([
    {id:1, title:"da", body:"z"},
    {id:2, title:"asd", body:"asd"},
    {id:3, title:"zxc 3", body:"2"},
    {id:4, title:"had", body:"3333"}
  ]);
  const [selectedSort,setSelectedSort] = useState('');
  const [searchQuery,setSeatchquery]= useState('');

  const sortedPosts = useMemo(()=>{
    console.log("гет сортед пропс")
    if(selectedSort){
        return [...posts.sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))];
    }
    return posts;
  },[selectedSort,posts]);

  const removePost =(post) =>{
    setPosts(posts.filter(p => p.id !==post.id));
  };

  const createPost= (newPost)=>{
    setPosts([...posts,newPost])
  }

  const sortPosts =(sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
        <PostForm create={createPost}/> 
        <MyInput value={searchQuery} placeholder="Поиск" onChange={e => setSeatchquery(e.target.value )}></MyInput>
        <MySelect defaultValue="Сортировка:" options={[
            {value:'title',name:'По названию'},
            {value:'body',name:'По описанию'}
          ]}
          value={selectedSort}
          onChange={sortPosts}
        />
        {posts.length ? 
        <PostList posts={sortedPosts}  title="Список хуйни" remove={removePost}/> 
        :
        <h1 style={{textAlign:'center'}}>Посты не найдены!</h1>}
    </div>
  );
}

export default App;

import React,{useEffect, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination"
import "./styles/App.css"
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPagesCount,getPagesArray} from "./components/utils/pages";

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
  const[limit,setLimit] = useState(10);
  const[page,setPage] = useState(1);
  const [totalPages,setTotalPages] = useState(0);
  const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query);

  let pagesArray = getPagesArray(totalPages);

  const[fetchPosts,isPostsLoading,postError] = useFetching(async(limit,page)=>{
    const posts = await PostService.getAll(limit,page);
    setPosts(posts.data);
    const totalCount = posts.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount,limit));
  });


  useEffect(()=>{
    fetchPosts(limit,page);
  },[]);

  const removePost =(post) =>{
    setPosts(posts.filter(p => p.id !==post.id));
  };
  const createPost= (newPost)=>{
    setPosts([...posts,newPost])
    setModal(false);
  }
  const changePage = (pageNumber) =>{
    setPage(pageNumber);
    fetchPosts(limit,pageNumber);
  }
  return (
    <div className="App">
    <MyButton onClick={()=> setModal(true)}>Создать пост</MyButton>
    <MyModal visible={modal}  setVisible={setModal}>
      <PostForm create={createPost}/> 
    </MyModal>
    <PostFilter filter={filter} setFilter={setFilter}/>
      {postError && <h1>Something goes wronk</h1>}
      {isPostsLoading ? <div style={{display:'flex',marginTop:"50px",justifyContent:'center'}}><Loader/></div> :<PostList posts={sortedAndSearchedPosts}  title="Список хуйни" remove={removePost}/>}   
      <Pagination pagesArray={pagesArray} page={page} changePage={changePage}/>
    </div>

  );
}

export default App;
 
import React, { useEffect, useRef, useState } from "react";
import PostService from "../../API/PostService";
import { useFetching } from "../../hooks/useFetching";
import { useObserver } from "../../hooks/useObserver";
import { usePosts } from "../../hooks/usePosts";
import "../../styles/App.css";
import PostFilter from "../PostFilter";
import PostForm from "../PostForm";
import PostList from "../PostList";
import MyButton from "../UI/button/MyButton";
import Loader from "../UI/Loader/Loader";
import MyModal from "../UI/MyModal/MyModal";
import Pagination from "../UI/pagination/Pagination";
import MySelect from "../UI/select/MySelect";
import { getPagesCount } from "../utils/pages";

const  Posts = () => {
  const [posts,setPosts] = useState([

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
  const lastEl = useRef();

  

  const[fetchPosts,isPostsLoading,postError] = useFetching(async(limit,page)=>{
    const resp = await PostService.getAll(limit,page);
    // setPosts([...posts,...resp.data]);   // with infinitive scroll
    setPosts(resp.data);
    const totalCount = resp.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount,limit));
  });

  // useObserver(lastEl,page<totalPages,isPostsLoading,()=>{     //that the same shit
  //   setPage(page+1)
  // })

  useEffect(()=>{
    fetchPosts(limit,page);
  },[page,limit]);

  const removePost =(post) =>{
    setPosts(posts.filter(p => p.id !==post.id));
  };
  const createPost= (newPost)=>{
    setPosts([...posts,newPost])
    setModal(false);
  }
  const changePage = (pageNumber) =>{
    setPage(pageNumber);
  }
  return (
    <div className="App">
    <MyButton onClick={()=> setModal(true)}>Создать пост</MyButton>
    <MyModal visible={modal}  setVisible={setModal}>
      <PostForm create={createPost}/> 
    </MyModal>
    <PostFilter filter={filter} setFilter={setFilter}/>
    <MySelect
      value={limit}
      onChange={value => setLimit(value)}
      defaultValue="Кол-во элементов on page"
      options={[
        {value:5,name:'5'},
        {value:10,name:'10'},
        {value:25,name:'25'},
        {value:-1,name:'Показать все'},
      ]}
    />
      {postError && <Loader/>}
      <PostList posts={sortedAndSearchedPosts}  title="Список хуйни" remove={removePost}/>  
      <div ref={lastEl}></div>
      {isPostsLoading && 
        <div style={{display:'flex',marginTop:"50px",justifyContent:'center'}}><Loader/></div>
      } 
      <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
    </div>

  );
}

export default Posts;
 
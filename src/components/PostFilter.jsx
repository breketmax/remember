import React from 'react';
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";


const PostFilter = ({filter,setFilter}) => {
  return (
    <div>
      <MyInput 
        value={filter.query} 
        placeholder="Поиск" 
        onChange={e => setFilter({...filter,query:e.target.value })}
      />
      
      <MySelect 
        defaultValue="Сортировка:" 
        options={[
          {value:'title',name:'По названию'},
          {value:'body',name:'По описанию'}
        ]}
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
      />
    </div>
  );
};

export default PostFilter;
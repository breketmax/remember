import React from 'react';
import { NavLink } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

const PostItem = ({post,remove}) => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{post.id}. {post.title}</strong>
                    <div>
                        {post.body}
                    </div>
                </div>
                <div className="post_btns">
                    <NavLink to={`${post.id}`}><MyButton>Открыть</MyButton></NavLink>
                    <MyButton onClick={()=> remove(post)}>Удалить</MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
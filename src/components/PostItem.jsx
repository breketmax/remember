import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = ({post,remove,number}) => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{number}. {post.title}</strong>
                    <div>
                        {post.body}
                    </div>
                </div>
                <div className="post_btns">
                    <MyButton onClick={()=> remove(post)}>Удалить</MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
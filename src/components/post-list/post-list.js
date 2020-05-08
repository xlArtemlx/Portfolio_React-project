import React from 'react';
import PostListItem from '../post-list-item'
import './post-list.css';

const PostList = () => {
    return(
        <ul className = "app-list list-group">
            <PostListItem label ='Все ок'/>
            <PostListItem label ='Ну точно ок'/>
            <PostListItem label ='Все прошли'/>
        </ul>
    )
}

export default PostList;
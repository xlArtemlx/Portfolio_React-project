import React from 'react';
import PostListItem from '../post-list-item'
import './post-list.css';

import {ListGroup} from 'reactstrap';

const PostList = ({posts}) => {

    const elements = posts.map((item)=>{

        const {id, ...itemProps} = item;
        return (
            <li key ={id} className = 'list-group-item'>
                <PostListItem 
                label = {item.label}
                important ={item.important}/>

            </li> // key формирует рандомные ключи, и позволяет не перезагружать данные на старицу
        )
    });

    return(
        <ListGroup className = "app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;
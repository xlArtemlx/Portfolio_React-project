import React from 'react';
import PostListItem from '../post-list-item'
import './post-list.css';

import {ListGroup} from 'reactstrap';

const PostList = ({posts, onDelete, onToggleImportant,onToggleLiked}) => {

    const elements = posts.map((item)=>{

        const {id, ...itemProps} = item;
        return (
            <ListGroup key ={id} className = 'list-group-item'>
                <PostListItem 
                {...itemProps}
                onDelete ={ () => onDelete(id)}
                onToggleImportant ={ () => onToggleImportant(id)}
                onToggleLiked ={ () => onToggleLiked(id)} />

            </ListGroup> // key формирует рандомные ключи, и позволяет не перезагружать данные на старицу
        )
    });

    return(
        <ul className = "app-list">
            {elements}
        </ul>
    )
}

export default PostList;
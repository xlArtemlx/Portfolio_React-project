import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';


import './app.css' 

const App = () => {

    const data = [
        {label: 'Все ок', important:true , id :'weqw'},
        {label: 'Ну точно ок', important:false , id :'wqdwd'},
        {label: 'Все прошли', important:false , id :'wdqws'}
    ]
    return ( 
        <div className = "app">
            <AppHeader/>
            <div className = "search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts = {data}/>
            <PostAddForm/>
        </div>
    );
};

export default App;
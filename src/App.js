import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Content/Profile/Profile";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Content/Home/Home";
import NewsFeed from "./components/Content/NewsFeed/NewsFeed";
import Recipes from "./components/Content/Recipes/Recipes";
import Favorites from "./components/Content/Favorites/Favorites";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className='app-wrapper-content'>
                    <Route path='/home' component={Home}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/recipes' component={Recipes}/>
                    <Route path='/news' component={NewsFeed}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/favorites' component={Favorites}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
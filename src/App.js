import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Content/Profile/Profile";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Home from "./components/Content/Home/Home";
import NewsFeed from "./components/Content/NewsFeed/NewsFeed";
import Recipes from "./components/Content/Recipes/Recipes";
import Favorites from "./components/Content/Favorites/Favorites";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <div className='app-wrapper-content'>
                <Route exact path='/' render={() => <Home/>}/>
                <Route path='/profile' render={() => <Profile profileData={props.state.profileData}/>}/>
                <Route path='/recipes' render={() => <Recipes/>}/>
                <Route path='/news' render={() => <NewsFeed newsData={props.state.newsData}/>}/>
                <Route path='/dialogs' render={() => <Dialogs
                    dialogsData={props.state.dialogsData}
                    addMessage={props.addMessage}
                />}/>
                <Route path='/favorites' render={() => <Favorites/>}/>
            </div>
        </div>
    );
};

export default App;
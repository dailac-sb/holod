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

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className='app-wrapper-content'>
                    <Route exact path='/' render={() => <Home/>}/>
                    <Route path='/profile' render={() => <Profile
                        profile={props.profile}
                        subscription={props.subscription}
                        subscribers={props.subscribers}
                        myPostData={props.myPostData}
                    />}/>
                    <Route path='/recipes' render={() => <Recipes/>}/>
                    <Route path='/news' render={() => <NewsFeed
                        postDataNews={props.postDataNews}
                    />}/>
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogData={props.dialogData}
                        messageData={props.messageData}
                    />}/>
                    <Route path='/favorites' render={() => <Favorites/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
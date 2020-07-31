import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Content/Profile/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <div className='app-wrapper-content'>
                {/*<Dialogs />*/}
                <Profile />
            </div>
        </div>
    );
};

export default App;
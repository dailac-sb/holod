import React from 'react';
import ReactDOM from 'react-dom';
import './render.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage} from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addMessage={addMessage}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


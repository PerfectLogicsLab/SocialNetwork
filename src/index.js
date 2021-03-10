import ReactDOM from "react-dom";
import React from "react";
import store from "./store/store";
import reportWebVitals from './reportWebVitals';
import App from "./App";
import 'normalize.css';
import './index.css';
import {BrowserRouter} from "react-router-dom";



const renderDependingOnState = (state) =>{
    //console.log(state);
    ReactDOM.render(

        <React.StrictMode>
            <BrowserRouter>
            <App state = {state}
                 dispatch = {store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderDependingOnState(store.getState());

store.subscribe(() => {
    const state = store.getState();
    renderDependingOnState(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {Nav} from "./components/nav/nav";
import {ChatColum} from "./components/chatColum/chatColum";
import {Profile} from "./components/main/profile/profile";
import {Messenger} from "./components/main/messenger/messenger";
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBolt, faSlidersH, faNewspaper, faExchangeAlt, faCogs, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faGrin, faComments, faCommentDots, faHeart} from '@fortawesome/free-regular-svg-icons';
import {Route} from "react-router-dom";

library.add(faBolt, faSlidersH, faNewspaper, faGrin, faComments, faCommentDots, faExchangeAlt, faHeart, faCogs, faChevronDown);

function App(props) {

    return (
            <div className="App-wrapper">
                <Nav/>
                <ChatColum/>
                <Header/>
                <div className="main-wrapper">
                    <div className="contentContainer">
                        <Route exact path='/' render={ () =>
                            <Profile state = {props.state.profilePage}
                                     dispatch = {props.dispatch} /> }/>
                        <Route path='/dialogs' render={ () =>
                            <Messenger state = {props.state.messengerPage}
                                       dispatch = {props.dispatch}/> }/>
                    </div>
                </div>
            </div>
    );
}

export default App;

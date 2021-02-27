import './App.css';
import React from 'react';
import {Header} from "./components/header/header";
import {Nav} from "./components/nav/nav";
import {ChatColum} from "./components/chatColum/chatColum";
import {Profile} from "./components/main/profile/profile";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBolt, faSlidersH, faNewspaper, faExchangeAlt, faCogs, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faGrin, faComments, faCommentDots, faHeart } from '@fortawesome/free-regular-svg-icons';

library.add( faBolt, faSlidersH, faNewspaper, faGrin, faComments, faCommentDots, faExchangeAlt, faHeart, faCogs, faChevronDown );

function App() {
  return (
    <div className="App-wrapper">
        <Nav />
        <ChatColum />
        <Header />
        <div className="main-wrapper">
            <Profile/>
        </div>
    </div>
  );
}

export default App;

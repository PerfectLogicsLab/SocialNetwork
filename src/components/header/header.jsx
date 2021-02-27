import React from 'react';
import s from './headers.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.leftPart}>
                <h6 className={s.pageName}>Profile PAGE</h6>
                <input type="text" placeholder="Search here people or pages..." className={s.text}/>
                <a href="#" className={`${s.findBaton} a`}>Find</a>
            </div>
            <div className={s.rightPart}>
                <div className={s.notifications}>
                    <div className={s.friendReq}>
                        <a href="#" className="a"><FontAwesomeIcon icon={['far', 'grin']} /></a>
                        <span>6</span>
                    </div>
                    <div className={s.chat}>
                        <a href="#" className="a"><FontAwesomeIcon icon={['far', 'comments']} /></a>
                        <span>2</span>
                    </div>
                    <div className={s.notification}>
                        <a href="#" className="a"><FontAwesomeIcon icon="bolt" /></a>
                        <span>8</span>
                    </div>
                </div>
                <div className={s.authorThumb}>
                    <div className={s.avatar}>
                        <span className={s.state}></span>
                        <img src="https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331_960_720.png" alt="User Avatar" className={s.userAvatar}/>
                    </div>
                    <a href="#" className={`${s.userName} a`}>
                        <div className={s.authorName}>
                            Valera Korol
                            <div className={s.authorSubtitle}>SPACE COWBOY</div>
                        </div>
                        <FontAwesomeIcon icon="chevron-down" />
                    </a>
                </div>
            </div>
        </header>
    )
};

export {Header}

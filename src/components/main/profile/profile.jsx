import React from 'react';
import s from './profile.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {TimeLine} from './timeLine/timeLine';
import {NavLink} from "react-router-dom";

const Profile = (props) => {
    return (
        <div className={s.profile}>

            <div className={s.headerWrapper}>
                <div className={s.profileArt}/>
                <div className={s.leftHeaderPart}>
                    <NavLink to="/" className={s.headerNavItem} activeClassName={s.active}>Timeline</NavLink>
                    <a href="#">About</a>
                    <a href="#">Friends</a>
                </div>
                <div className={s.headerAuthor}>
                    <a className={s.circleLink} href="#">
                        <img src="https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331_960_720.png"
                             alt="User Avatar" className={s.headerUserAvatar}/>
                    </a>
                    <a href="#" className={s.headerUserLink}>Valera Korol</a>
                    <span>San Francisco, CA</span>
                </div>
                <div className={s.rightHeaderPart}>
                    <a href="#">Photos</a>
                    <a href="#">Videos</a>
                    <a href="#">...</a>
                </div>
                <div className={s.controlBlockButton}>
                    <a className={s.NavBtn + ' ' + s.blue} href="#">
                        <FontAwesomeIcon className={s.NavIcon} icon={['far', 'grin']}/>
                    </a>
                    <NavLink className={s.NavBtn + ' ' + s.purple} to="/dialogs">
                        <FontAwesomeIcon className={s.NavIcon} icon={['far', 'comments']}/>
                    </NavLink>
                    <a className={s.NavBtn + ' ' + s.orange} href="#">
                        <FontAwesomeIcon className={s.NavIcon} icon="cogs"/>
                    </a>
                </div>
            </div>

            <TimeLine posts = {props.state.posts}
                      newPostText = {props.state.newPostText}
                      dispatch = {props.dispatch} />

        </div>

    )
};

export {Profile};
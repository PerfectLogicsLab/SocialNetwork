import React from 'react';
import s from './profile.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {TimeLine} from './timeLine/timeLine';

const Profile = () => {
    return (
        <div className={s.profile}>

            <div className={s.headerWrapper}>
                <div className={s.profileArt}/>
                <div className={s.leftHeaderPart}>
                    <a href="#" className={s.headerNavItem}>Timeline</a>
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
                    </a><a className={s.NavBtn+ ' ' + s.purple} href="#">
                    <FontAwesomeIcon className={s.NavIcon} icon={['far', 'comments']} />
                </a><a className={s.NavBtn+ ' ' + s.orange} href="#">
                    <FontAwesomeIcon className={s.NavIcon} icon="cogs" />
                </a>
                </div>
            </div>

            <TimeLine />

        </div>

    )
};

export {Profile};
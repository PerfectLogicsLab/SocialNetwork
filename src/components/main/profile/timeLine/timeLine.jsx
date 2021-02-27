import React from 'react';
import s from './timelines.module.css';
import {Post} from './post';
import {ProfileAbout} from './profileAbout';
import {LastPhotos} from './lastPhotos'

const TimeLine = () => {
    return (
            <div className={s.timeline}>
                <div className={s.leftTimelinePart}>
                    <ProfileAbout />
                </div>

                <div className={s.centerTimelinePart}>
                    <Post />
                    <Post />
                </div>

                <div className={s.rightTimelinePart}>
                    <LastPhotos />
                </div>

            </div>

    )
};

export {TimeLine};
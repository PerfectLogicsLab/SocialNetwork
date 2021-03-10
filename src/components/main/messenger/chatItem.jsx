import React from 'react';
import s from './messenger.module.css';

const ChatItem = (props) => {
    return (
        <div className={s.[props.who]}>
            {props.content}
        </div>
    )
};

export {ChatItem};
import React from 'react'
import s from './chatColum.module.css'

const ChatItem = (props) => {
    return (
        <a href="#" className={s.chatItem}>
            <img src={props.userAvatar} alt="Avatar"/>
            <span className={s.state}></span>
        </a>
    )
};

export {ChatItem}
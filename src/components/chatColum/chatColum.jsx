import React from 'react'
import {ChatItem} from './chatItem'
import s from './chatColum.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ChatColum = () => {
    return (
        <div className={s.chatColum}>
            <div className={s.chats}>
                <ChatItem userAvatar='https://cdn.pixabay.com/photo/2021/02/01/10/05/woman-5970017_960_720.png' />
                <ChatItem userAvatar='https://cdn.pixabay.com/photo/2021/01/24/09/28/girl-5944690_960_720.png' />
            </div>
            <div className={s.options}>
                <a href="#" className={s.chatItem}>
                    <FontAwesomeIcon icon='sliders-h'/>
                </a>
                <a href="#" className={s.chatItem}>
                    <FontAwesomeIcon icon={['far', 'comments']}/>
                </a>
            </div>
        </div>
    )
};

export {ChatColum}
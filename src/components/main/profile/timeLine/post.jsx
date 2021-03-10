import React from 'react';
import s from './post.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Post = (props) => {
    return (

                    <div className={s.post}>
                        <div className={s.postHeader}>
                            <div className={s.authorThumb}>
                                <img src="https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331_960_720.png"
                                     alt="User Avatar" className={s.userAvatar}/>
                                <a href="#" className={`${s.userName} a`}>Valera Korol</a>
                                <p className={s.postTime}>19 hours ago</p>
                            </div>
                            <div>
                                <a href="#" className={s.options}>...</a>
                            </div>
                        </div>
                        <div className={s.postContent}>
                            <p className={s.postText}>
                                {props.textContent}
                            </p>
                        </div>
                        <div className={s.postFooter}>
                            <div>
                                <a href="#">
                                    <FontAwesomeIcon className={s.icon} icon={['far', 'heart']} />
                                    <span>{props.likedCount}</span>
                                </a>
                                likedUsers
                            </div>
                            <div>
                                <a href="#">
                                    <FontAwesomeIcon className={s.icon} icon={['far', 'comment-dots']} />
                                    <span>{props.commentCount}</span>
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon className={s.icon} icon="exchange-alt" />
                                    <span>{props.sharedCount}</span>
                                </a>

                            </div>
                        </div>
                    </div>

    )
};

export {Post};
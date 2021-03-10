import React from 'react';
import s from './timelines.module.css';
import {Post} from './post';
import {ProfileAbout} from './profileAbout';
import {LastPhotos} from './lastPhotos'
import {addPost, updatePostText} from "../../../../store/actions/profile";


const TimeLine = (props) => {

    const changePostText = (e) => {
        props.dispatch(updatePostText(e.target.value))
    };

    const addNewPost = () => {
        props.dispatch(addPost());
    };

    let posts = props.posts.map((obj) => <Post
        textContent={obj.textContent}
        likedCount={obj.likedCount}
        commentCount={obj.commentCount}
        sharedCount={obj.sharedCount}/>);


    return (
        <div className={s.timeline}>
            <div className={s.leftTimelinePart}>
                <ProfileAbout/>
            </div>

            <div className={s.centerTimelinePart}>
                <div className={s.newPost}>
                    <input type="text" value={props.newPostText} onChange={changePostText} />
                    <button onClick={addNewPost}>Post</button>
                </div>
                {posts}
            </div>

            <div className={s.rightTimelinePart}>
                <LastPhotos/>
            </div>

        </div>

    )
};

export {TimeLine};
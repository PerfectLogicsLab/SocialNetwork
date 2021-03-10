import React from 'react';
import s from './messenger.module.css';
import {NavLink} from "react-router-dom";


const Dialog = (props) => {

    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}> {props.name}</NavLink>
        </div>
    )
}

export {Dialog};
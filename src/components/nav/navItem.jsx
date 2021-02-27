import React from 'react';
import s from './leftNav.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavItem = (props) => {
    return (
        <a href={props.path} className={s.navItem}><FontAwesomeIcon icon={props.icon} /></a>
    )
};

export {NavItem};
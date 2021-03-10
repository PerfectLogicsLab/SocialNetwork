import React from 'react';
import s from './leftNav.module.css';
import {NavItem} from './navItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/" className={`${s.logo} ${s.navItem}`}><FontAwesomeIcon icon="bolt" /></NavLink>
            <NavItem path = '/' icon = 'sliders-h' />
            <NavItem path = '/' icon = 'newspaper' />
        </nav>
    )
};

export {Nav};
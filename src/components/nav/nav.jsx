import React from 'react';
import s from './leftNav.module.css';
import {NavItem} from './navItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Nav = () => {
    return (
        <nav className={s.nav}>
            <a href="#" className={`${s.logo} ${s.navItem}`}><FontAwesomeIcon icon="bolt" /></a>
            <NavItem path = '/' icon = 'sliders-h' />
            <NavItem path = '/' icon = 'newspaper' />
        </nav>
    )
};

export {Nav};
import React from 'react';
import s from './profileAbout.module.css';

const ProfileAbout = () => {
    return (

                    <section className={s.about}>
                        <h6>Profile Intro</h6>
                        <ul className={s.personalInfo}>
                            <li>
                                <span className={s.title}>About Me:</span>
                                <span className={s.text}>Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier 56.</span>
                            </li>
                            <li>
                                <span className={s.title}>Favourite TV Shows:</span>
                                <span className={s.text}>Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.</span>
                            </li>
                            <li>
                                <span className={s.title}>Favourite Music Bands / Artists:</span>
                                <span className={s.text}>Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</span>
                            </li>
                        </ul>
                    </section>

    )
};

export {ProfileAbout};
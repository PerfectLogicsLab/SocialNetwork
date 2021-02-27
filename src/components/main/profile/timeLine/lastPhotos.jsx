import React from 'react';
import s from './lastPhotos.module.css';

const LastPhotos = () => {
    return (

                    <div>
                        <section>
                            <h6>Last Photos</h6>
                            <div className={s.lastPhotos}>
                                <img src="https://images.pexels.com/photos/1735781/pexels-photo-1735781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="props"/>
                                <img src="https://images.pexels.com/photos/3803592/pexels-photo-3803592.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="props"/>
                                <img src="https://images.pexels.com/photos/6623646/pexels-photo-6623646.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="props"/>
                                <img src="props" alt="props"/>
                                <img src="props" alt="props"/>
                                <img src="props" alt="props"/>
                                <img src="props" alt="props"/>
                                <img src="props" alt="props"/>
                                <img src="props" alt="props"/>
                            </div>
                        </section>
                    </div>

    )
};

export {LastPhotos};
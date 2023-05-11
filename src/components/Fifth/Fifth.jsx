import React from 'react';
import './fifth.scss';
import { Link } from 'react-router-dom';
import {animateScroll} from 'react-scroll'

const Fifth = () => {
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
    return (
        <section className='fifth'>
            <div className='fifth-wrapper'>
                <Link onClick={toTop} to='contact'>
            <p>Свяжитесь с нами</p>
            </Link>
            <p>+996 704-213-010</p>
            <p>@kit.drone</p>
            </div>
            
        </section>
    );
};

export default Fifth;
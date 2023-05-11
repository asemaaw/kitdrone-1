import React from 'react';
import './fourthsection.scss'
import { Link } from 'react-router-dom';
import {animateScroll} from 'react-scroll'

const FourthSection = () => {
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
    return (
        <section className='fourth'>
            <div className='phone'>
                <div className='pluses'>
                    <h2>Преимущества</h2>
                    <p>Данная разработка будет использоваться для распыления полей через дроны,тем самым 
                        использовав методы,которые имеют ряд преимуществ.
                    </p>
                    <Link onClick={toTop} to='about'>
                    <button>Узнать больше</button>
                    </Link>
                </div>

            </div>
            <div className='device'>
            <div  className='garantee'> 
                    <h2>Наши гарантии</h2>
                    <p>Выбрав один из наших дронов,мы предоставляем долгосрочную поддержку.</p>
                    <Link onClick={toTop} to='about'> 
                    <button>Узнать больше</button>
                    </Link>
                </div>

            </div>
            <div className='build'>
            <div className='news'>
                    <h2>Новости</h2>
                    <p>Мы продолжаем развиваться!Следите за продвижениями нашего проекта.</p>
                    <Link onClick={toTop} to='about'>
                    <button>Узнать больше</button>
                    </Link>
                </div>

            </div>

            
        </section>
    );
};

export default FourthSection;
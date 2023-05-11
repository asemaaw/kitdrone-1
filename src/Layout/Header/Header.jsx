import React from 'react';
import './header.scss'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            
                <nav>
                    <Link to='/' className='link'>Главная</Link>
                    <Link to='/about' className='link'>О нас</Link>
                    <Link to='/service' className='link'>Сервис</Link>
                    <Link to='/support' className='link'>Поддержка</Link>
                    <Link to='/contact' className='link'>Контакты</Link>
                    
                </nav>
             
                
            
            
        </header>
    );
};

export default Header;
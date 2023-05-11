import React from 'react';
import './aboutthree.scss'
import drone2 from './drone2.webp'

const AboutThree = () => {
    return (
        <section className='info'>
             <div className='info-img'>
                <img src={drone2} alt="" />
            </div>
            <div className='info-descr'>
                <h2>О проекте</h2>
                <p>Использование дронов в сельском хозяйстве позволяет не только скоратить расходы и повысить
                    эффективность работы,но и существенно улучшить качество продукции и уменьшить негативное воздействие 
                    на окружающую среду.Мы предлагаем наши дроны для вашего бизнеса с наименьшими затратами и с высоким качеством.
                </p>
            </div>
           
            
        </section>
    );
};

export default AboutThree;
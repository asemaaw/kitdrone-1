import React from 'react';
import './serviceone.scss'
import benefit from './benefit.webp'

const ServiceOne = () => {
    return (
        <section className='service-one'>
            {/* <h2>Преимущества агродронов</h2> */}
            <div className='service-wrapper'>
                <img src={benefit} alt="" />
                <div className='service-right'>
                    <div className='service-box-first'>
                <div className='service-descr one'>
                    <h3>Безопасность и экономичность</h3>
                    <p>Применение дронов для распыления снижает затраты на использование и содержание традиционной техники и уменьшить риск травмирования работников.</p>
                </div>
                <div className='service-descr two'>
                    <h3>Точность</h3>
                    <p>Дроны оснащены современными системами навигации и мониторинга, что позволяет точно определять местоположение полей и управлять процессом распыления, избегая пропусков и пересечений.</p>
                </div>
                </div>
                <div className='service-box'>
                <div className='service-descr three'>
                    <h3>Эффективность</h3>
                    <p>Применение дронов для распыления позволяет повысить производительность работы, уменьшить время, необходимое для проведения распыления.</p>
                </div>
                <div className='service-descr last' >
                
                    <h3>Увеличение эффективности</h3>
                    <p>Точное и своевременное распыление полей помогает улучшить качество растений и увеличить урожайность.</p>
                </div>
                </div>
                </div>

            </div>
        </section>
    );
};

export default ServiceOne;
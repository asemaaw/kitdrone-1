import React from 'react';
import './service.scss'
import ServiceOne from '../../components/ServiceOne/ServiceOne';

const Service = () => {
    return (
        <>
        <section className='service'>
            <div className='title-service'>
            <h2>Экономически эффективные услуги <br /> по развитию сельского хозяйства</h2>
            </div>
            
        </section>
        <ServiceOne/>
        </>
    );
};

export default Service;
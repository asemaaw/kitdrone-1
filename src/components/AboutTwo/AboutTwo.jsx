import React from 'react';
import './abouttwo.scss'
import veg from './veg.jpg';
import agro from './agro .jpg';
import animal from './animal.jpg';


const AboutTwo = () => {
    return (
        <section className='pluses'>
            <div className='pluses-container'>
                <div className='up-wrapper'>
                    <div className='description yellow'>
                        <p>С помощью агродронов можно проводить точечное опрыскивание растений, что позволяет снизить расход химических веществ и уменьшить негативное воздействие на окружающую среду. </p></div>
                    <div className='descr-pic one'><img src={veg} alt="" /></div>
                    <div className='description yellow'>
                        <p>В результате использования агродронов улучшается качество и количество собираемых урожаев, снижаются затраты на обработку полей и уход за растениями. </p></div>
                    <div className='descr-pic one'><img src={agro} alt="" /></div>
                    <div className='description blue'>
                        <p>В результате использования агродронов улучшается качество и количество собираемых урожаев, снижаются затраты на обработку полей и уход за растениями. </p></div>
                        <div className='descr-pic one'><img src={animal} alt="" /></div>
                </div>
                   
                    

            </div>

        </section>

    );
};

export default AboutTwo;
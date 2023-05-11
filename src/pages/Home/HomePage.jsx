import React from 'react';
import Header from '../../Layout/Header/Header';
import './home.scss';
import SecondSection from '../../components/SecondSection/SecondSection';
import ThirdSection from '../../components/ThirdSection/ThirdSection';
import FourthSection from '../../components/FourthSection/FourthSection';
import Fifth from '../../components/Fifth/Fifth';
// import img1 from './mainlogo.svg'



const HomePage = () => {
    return (
    <>
        <section className='home'>
          
          
            <div className='left-wrapper'>
            <p className='project'>project</p>
        <h3>KIT. <span className='drone'>DRONE</span></h3>
        <p>НОВЕЙШАЯ РАЗРАБОТКА</p>
        <div className='line'></div>
        <p>в области сельского хозяйства</p>
        </div>
        <div className='right-wrapper'>
            <img src="./images/mainicon.png" alt="" className='drone-img'/>
        </div>
      
       
    </section>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <Fifth/>
            
            </>

    
    
    );
};

export default HomePage;
import React from 'react';
import './about.scss'
import video from './video.mp4'
import AboutTwo from '../../components/AboutTwo/AboutTwo';
// import AboutThree from '../../components/AboutTwo/AboutTwo';
// import AboutFour from '../../components/AboutFour/AboutFour';
import YouTube from 'react-youtube';

import VideoPlayer from '../../VideoPlayer';
import aboutimg from './aboutimg.webp';
import AboutThree from '../../components/AboutThree/AboutThree';


const About = () => {
  
    return (
      <>
      <section className='about'>
      <div className='text-about'>
                <h2>Почему дроны необходимы в агротехнике?</h2>
                <p>Система опрыскивания - функция,позволяющая распылять жидкие и газообразные элементы
                    на поверхности объектов,что позволяет их обработать.Данная система хорошо подходит для сельского 
                    хозяйства,чтобы обработать растения или почву различными агрохимикатами.
                </p>
            </div>
            <div className='about-pic'>
                <img src={aboutimg} alt="" />
            </div>
        {/* <div> */}
          {/* <VideoPlayer/> */}
        {/* <iframe width="1300" height="600" src="https://www.youtube.com/embed/IH_kGijV8so?controls=0&amp;start=203" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* < <iframe width="100%" height="600" src="ht
       tps://www.youtube.com/embed/IH_kGijV8so?controls=0&amp;start=187" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>div> */}
        {/* <iframe width="800" height="600" src="https://www.youtube.com/embed/wvJBhfWd2Xg?controls=0&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="600" src="https://www.youtube-nocookie.com/embed/wvJBhfWd2Xg?controls=0&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="1200" height="500" src="https://www.youtube.com/embed/P2YPG8PO9JU?controls=0&amp;start=66" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <video autoPlay='true' controls width='300' height='500'>
          <source type='video/mp4' src={video} />
        </video> */}
        {/* </div> */}

        {/* <h3>AGRODRONES</h3>
        <p>Kyrgyz Innovation Technologies</p>
        <div></div>
        <p>Беспилотные летательные аппараты, используемые для сельского хозяйства и обработки полей.</p> */}
        
        {/* <div className='img-about'> 
          
          <span>Данный проект является прорывом в сельском хозяйстве.Это огромный толчок в будущее нашей страны.
            Дроны предназначены для более безопасного и удобного полива и опрыскивания растений,а также нацелены на 
            усовершенствование качества ухода за растениями с минимальным вредом и максимальными положительными результатами.
            Одной из целью данного проекта является улучшение развития сельского хозяйства нашей страны.Уменьшить нагрузку,увеличить результат.

          </span> 
         </div> */}
       
      
      </section>
      <AboutTwo/>
      <AboutThree/>
      {/* <AboutThree/> */}
      </>
    );
};

export default About;
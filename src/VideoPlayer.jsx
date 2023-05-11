import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = () => {
   
        // const videoId = <iframe width="560" height="315" src="https://www.youtube.com/embed/IH_kGijV8so?controls=0&amp;start=203" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>;
      
        // const opts = {
        //   height: '100%',
        //   width: '100%',
        //   playerVars: {
        //     autoplay: 1,
        //   },
        // };
      
        // return <YouTube videoId={videoId} opts={opts} />;
        return(
            <div className='video__youtube'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IH_kGijV8so?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        )
      
};

export default VideoPlayer;
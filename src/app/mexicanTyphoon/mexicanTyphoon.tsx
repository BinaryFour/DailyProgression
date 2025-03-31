import React from 'react';

const MexicanTyphoon = () => {
  //SF2 T.Hawk theme
  const videoId = 'LjrsY4Wsmss';
  //in seconds
  const startAt = 0;

  return (
    <div>
      <iframe
        width='640'
        height='360'
        src={`https://www.youtube.com/embed/${videoId}?playsinline=1&iv_load_policy=3&rel=0&showinfo=0&controls=1&fs=0&start=${startAt}&autoplay=1&enablejsapi=1&widgetid=1`}
        title='Super Street Fighter II OST T. Hawk Theme'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MexicanTyphoon;

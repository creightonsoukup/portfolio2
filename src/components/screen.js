import React from 'react';
import VideoPlayer from './video_player';
import Gallery from './gallery'

const Screen = (props) => {
  return (
    <div className='screen'>
      <img id='screen' src={`https://s3.amazonaws.com/creightonsoukup/portfolio-site/${props.tag}.png`} />

    </div>
  )
}

export default Screen;

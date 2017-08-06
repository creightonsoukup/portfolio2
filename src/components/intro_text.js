import React from 'react';

const IntroText = (props) => {
  const introText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  return (
    <div className='intro-text'>
      <h2>{introText}</h2>
    </div>
  )
}

export default IntroText

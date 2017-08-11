import React from 'react';

const IntroText = (props) => {
  const greeting = 'scroll down,'
  const introText = 'see what I am working on, what I am talking about, and where I have been exploring'
  return (
    <div className='intro-text'>
      <h2>{greeting}<br/>{introText}</h2>
    </div>
  )
}

export default IntroText

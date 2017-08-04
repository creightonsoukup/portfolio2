import React from 'react';

const CLoader = (props) => {
  return (
    <div className='c-loader'>
        <img className='spin' src={require('../assets/c.png')} />
    </div>
  )
}

export default CLoader;

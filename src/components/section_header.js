import React from 'react';

const SectionHeader = (props) => {
  return (
    <h2  className='section-header header-text'>
      {props.header}
    </h2>
  )
}

export default SectionHeader

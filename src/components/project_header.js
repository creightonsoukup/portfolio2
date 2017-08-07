import React from 'react';

const ProjectHeader = (props) => {
  return (
    <div className='project-header'>
      <h3>{props.name}</h3>
      <h4>{props.subheader}</h4>
    </div>
  )
}

export default ProjectHeader;

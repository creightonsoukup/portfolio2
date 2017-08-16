import React from 'react';

const ProjectFooter = (props) => {
  return (
    <div className='project-footer'>
      <a className='button' href={props.website}>
        Live Site
      </a>
      <a className='button' href={props.github}>
        GitHub
      </a>
    </div>
  )
}

export default ProjectFooter;

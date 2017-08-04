import React from 'react';
import Screen from './screen';
import TextBox from './text_box';
import ProjectFooter from './project_footer';

const Project = (props) => {
  return (
    <div className='project'>
      <Screen/>
      <TextBox/>
      <ProjectFooter />
    </div>
  )
}

export default Project;

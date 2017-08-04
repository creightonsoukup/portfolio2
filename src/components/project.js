import React from 'react';
import Screen from './screen';
import TextBox from './textbox';
import ProjectFooter from './project_footer'

const Project = (props) => {
  return (
    <div className='project'>
      <Screen/>
      <Textbox/>
      <ProjectFooter />
    </div>
  )
}

export default Project;

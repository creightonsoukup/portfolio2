import React from 'react';
import ProjectHeader from './project_header';
import Screen from './screen';
import TextBox from './text_box';
import ProjectFooter from './project_footer'

const Project = (props) => {
  console.log(props.project)
  return (
    <div className='project'>
      <ProjectHeader
        subheader={props.project.subheader.toLowerCase()}
        name={props.project.name.toUpperCase()}/>
      <Screen/>
      <TextBox text={props.project.description}/>
      <ProjectFooter links={props.project.links}/>
    </div>
  )
}

export default Project;

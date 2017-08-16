import React from 'react';
import ProjectHeader from './project_header';
import Screen from './screen';
import TextBox from './text_box';
import ProjectFooter from './project_footer'

const Project = (props) => {
  return (
    <div className='project'>
      <ProjectHeader
        subheader={props.project.subheader.toLowerCase()}
        name={props.project.name.toUpperCase()}/>
      <Screen tag={props.project.tag}/>
      <ProjectFooter github={props.project.github} website={props.project.website}/>
    </div>
  )
}

export default Project;

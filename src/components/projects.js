import React from 'react';
import Project from './project';

const Projects = (props) => {

  const renderProjects = (project) => {
    return <Project key={project.id} project={project}/>
  }

  return (
    <section className='projects'>
      <h2 className='sub-header-text'>{'portfolio'}</h2>
      {props.projects.map(renderProjects)}
    </section>
  )
}

export default Projects;

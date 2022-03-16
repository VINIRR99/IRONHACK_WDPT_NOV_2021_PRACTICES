import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProjectDetails = ( {myProjects} ) => {
  const { id }  = useParams();

  const foundProject = myProjects.find(project => project.id === id);

  return (
    <div>
        <h2>{ foundProject.name } <span style={{fontSize:"14px"}}>{ foundProject.year }</span></h2>
        <h3>Used technologies: { foundProject.technologies }</h3>
        <p>{ foundProject.description }</p>
        <Link to='/projects'>Back</Link>
    </div>
  );
};

export default ProjectDetails;
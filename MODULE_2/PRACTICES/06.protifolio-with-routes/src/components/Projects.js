import React from 'react';
import { Link } from 'react-router-dom';

const Projects = ( {myProjects} ) => (
    <div>
        <h2>Projects:</h2>
        {myProjects.map(eachProject => (
            <div key={eachProject.id}>
                <h3>
                    <Link to={`/projects/${eachProject.id}`}>{eachProject.name}</Link>
                </h3>
                <h4>{eachProject.technologies}</h4>
                <hr />
            </div>
        ))}
    </div>
)

export default Projects;
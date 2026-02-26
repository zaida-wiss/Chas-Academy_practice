import {projectsData} from "../../data/projectsData";
import {Link} from "react-router-dom";
import React from "react";

export default function ProjectPage () {
return (
  <>
  <div>
    <ul>
      {projectsData.map(project =>(
        <li key={project.id}>
          <Link to={`/projects/${project.id}`}>{project.name}</Link>
        </li>
      ))}
    </ul>
  </div>
  </>
)
}


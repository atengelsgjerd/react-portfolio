import { Link } from "react-router-dom";
import projects from "../../data/projects";

export default function ProjectList () {
    
    

    
    return ( 
        <div className ="section-list">
            <h2></h2>
             {projects.map((project) => (
            <div className="section-preview" key={project.id}>
                <Link to={`/projects/${project.id}`}>
                <h2>{project.title}</h2>
                <img src= {project.image} alt ={project.title}></img>
                <p>{project.description}</p>
                </Link>
            </div>
           ))}
        </div>
     );
}
 

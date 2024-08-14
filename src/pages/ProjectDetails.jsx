import { useParams } from "react-router-dom";
import projectData from "../../data/projects";

// this is the project details page that will be rendered in the App.jsx file
export default function ProjectDetails  () {
    const { id } = useParams();
    const projectSingle = projectData.find((project) => project.id == id);
    return ( 
        <div className="project-details">
            
                <section>
                    <h2>{projectSingle.title}</h2>
                    <img src= {projectSingle.image} alt ={projectSingle.title}></img>
                    <p>{projectSingle.description}</p>
                </section>
                <section>
                    <h3>Links</h3>
                    <a href={projectSingle.github} target="_blank">Github Repo</a>
                    {projectSingle.link !== "" && (
                        <>
                        <br></br>
                    <a href={projectSingle.link} target="_blank">Live Website</a>
                    </>
                    )}
                    
                    
                </section>
                <section>
                    <h3>Tech Used</h3>
                    <ul>
                        {projectSingle.technologies.map((technology, index) => (
                            <li key={index}>{technology}</li>
                        ))}
                    </ul>
                </section>
            
        </div>
     );
}

import { useParams } from "react-router-dom";
import projectData from "../../data/projects";
// import useFetch from "../useFetch";

export default function ProjectDetails  () {
    const { id } = useParams();
    const projectSingle = projectData.find((project) => project.id == id);
    return ( 
        <div className="project-details">
            {/* {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>} */}
            
                <article>
                    <h2>{projectSingle.title}</h2>
                    <p>{projectSingle.description}</p>
                    <img src= {projectSingle.image} alt ={projectSingle.title}></img>
                </article>
            
        </div>
     );
}

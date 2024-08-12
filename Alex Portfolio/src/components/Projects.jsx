// import useFetch from "../useFetch";
import ProjectList from "./ProjectList";

const Projects = () => {
    // const { data: projects, isPending, error} = useFetch('http://localhost:8000/projects')
    

    
    return ( 
        <div className="home">
        {/* {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>} */}
         <ProjectList  title="Projects" />

    </div>
     );
}
 
export default Projects;
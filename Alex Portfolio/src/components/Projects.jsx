const Projects = ({projects, title }) => {
    
    

    
    return ( 
        <div className ="section-list">
            <h2>{ title }</h2>
             {projects.map((project) => (
            <div className="section-preview" key={project.id}>
                <h2>{project.title}</h2>
                <p> {project.image}</p>
                <p>{project.body}</p>
            </div>
           ))}
        </div>
     );
}
 
export default Projects;
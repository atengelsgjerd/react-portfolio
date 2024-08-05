const SectionList = ({sections, title }) => {
    
    

    
    return ( 
        <div className ="section-list">
            <h2>{ title }</h2>
             {sections.map((section) => (
            <div className="section-preview" key={section.id}>
                <h2>{section.title}</h2>
                <p>Written by {section.author}</p>
                <p>{section.body}</p>
            </div>
           ))}
        </div>
     );
}
 
export default SectionList;
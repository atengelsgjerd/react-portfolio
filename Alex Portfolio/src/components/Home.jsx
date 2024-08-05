import { useState } from 'react';
import SectionList from './SectionList';

const Home = () => {
   const [sections, setSection] = useState([
    {title: 'About Me', body: 'lorem ipsum...', author: 'Alex', id:1},
    {title: 'Portfolio', body: 'lorem ipsum...', author: 'Alex', id:2},
    {title: 'Resume', body: 'lorem ipsum...', author: 'Alex', id:3}
   ])
    return ( 
        <div className="home">
          
            <SectionList sections={sections} title="About Me"/>
            <SectionList sections={sections.filter((section) => section.title === 'Portfolio')} title ="Portfolio"/>
        </div>
     );
}
 
export default Home;
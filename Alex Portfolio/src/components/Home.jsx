import { useState, useEffect } from 'react';
import SectionList from './SectionList';
import useFetch from '../useFetch';

const Home = () => {
  const { data: sections, isPending, error} = useFetch('http://localhost:8000/projects')

   

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {sections && <SectionList sections={sections} title="About Me" />}

        </div>
    );
}

export default Home;
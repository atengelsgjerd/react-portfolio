
import Projects from './Projects';
import useFetch from '../useFetch';

const Home = () => {
  const { data: projects, isPending, error} = useFetch('http://localhost:8000/projects')

   

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {projects && <Projects projects={projects} title="About Me" />}

        </div>
    );
}

export default Home;
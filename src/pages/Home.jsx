
// import useFetch from '../useFetch';
import About from '../components/About';

const Home = () => {
//   const { data: about, isPending, error} = useFetch('http://localhost:8000/about')

   

    return (
        <div className="home">
            {/* {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>} */}
             <About  title="About Me" />

        </div>
    );
}

export default Home;
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Resume from './pages/Resume';

// this is the App component that will be rendered in the main.jsx file with routes to each page
function App() {
 

  return (
    <Router>
    <div className="App">
      <Header />
      <div className="content" style={{ minHeight: "100vh"}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/projects/:id" element={<ProjectDetails/>}/>
          <Route path="/resume" element={<Resume/>}/>


         
        </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

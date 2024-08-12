import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';


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


         
        </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

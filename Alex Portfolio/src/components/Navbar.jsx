import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';




function Navbar() {
  const currentPage = useLocation().pathname;
  return (
    <>
    <nav className="navbar">
        <h1>Alex Engelsgjerd</h1>
        <div className="links">
            {/* <a className="nav-item"> */}
            <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
            {/* </a> */}
            {/* <a className="nav-item"> */}
            <Link to="/Projects" className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}>Projects</Link>
            {/* </a> */}
            {/* <a className="nav-item"> */}
            <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
            {/* </a> */}
            {/* <a className="nav-item"> */}
            <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
            {/* </a> */}
        
        </div>
    </nav>
    </>
  );
}

export default Navbar;

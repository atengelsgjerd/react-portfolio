import React, {useState} from 'react';




function Navbar() {
  return (
    <>
    <nav className="navbar">
        <h1>Alex Engelsgjerd</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/projects" style={{
                color: 'white',
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            }}>Projects</a>
            <a href="/contact">Contact</a>
        </div>
    </nav>
    </>
  );
}

export default Navbar;

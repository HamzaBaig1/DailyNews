import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar(props) {

  const moon1 = require('../moon2.png')
  const sunny = require('../sunny.png')

  const [moon, setMoon] = useState(false)

  const imageChangeHandler = () => {
    if (!moon) {
      setMoon(true);
    }
    else {
      setMoon(false);
    }
    props.toggleMode()
  }


  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" style={{fontSize:"22px"}} to="/">Daily News</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto" style={{fontSize:"20px"}}>
              <li className="nav-item  my-auto">
                <Link className="nav-link fw-bold" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item my-auto">
                <Link className="nav-link fw-bold" to="/General">General</Link>
              </li>
              <li className="nav-item my-auto">
                <Link className="nav-link fw-bold" to="/Business">Business</Link>
              </li>
              <li className="nav-item my-auto">
                <Link className="nav-link fw-bold" to="/Entertainment">Entertainment</Link>
              </li>
              <li className="nav-item my-auto">
                <Link className="nav-link fw-bold" to="/Health">Health</Link>
              </li>
              <li className="nav-item my-auto">
                <Link className="nav-link fw-bold" to="/Science">Science</Link>
              </li>
              <li className="nav-item my-auto">
                <Link className="nav-link fw-bold" to="/Sports">Sports</Link>
              </li>
              <li className="nav-item my-auto">
                <Link className="nav-link fw-bold" to="/Technology">Technology</Link>
              </li>

              <img className='ms-3 my-auto' src={!moon ? moon1 : sunny} alt='bulb-off' onClick={imageChangeHandler} style={{ width:"25px", cursor: "pointer" }} />

              
            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

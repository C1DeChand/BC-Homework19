import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
    <div>
        <h1>Employee Directory</h1>
        <div className="container-fluid">
          <div className="row fixed-top">
              <div className="col-12 bg-dark">
                  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                      <span className="navbar-brand mb-0 h1" id="name"></span>
                      <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>    
                      <div className="collapse navbar-collapse ml-auto" id="navLinks">
                          <ul className="navbar-nav ml-auto">
                              <li className="nav-item">
                                  <Link className="nav-link" to="/BC-Homework20/contact">Contact</Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to="/BC-Homework20/portfolio">Portfolio</Link>
                              </li>
                              <li className="nav-item active">
                                  <Link className="nav-link" to="/BC-Homework20/about" style={{color: "white", fontWeight: 600}}>About</Link>-+
                              </li>
                          </ul>
                      </div>
                  </nav>
              </div>
          </div>
        </div>
    </div>
    );
  }
  
  export default Header;
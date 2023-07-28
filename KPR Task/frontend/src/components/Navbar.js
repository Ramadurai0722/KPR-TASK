import React from 'react'
import {NavLink} from 'react-router-dom'
import {obj} from './Card'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-inverse" style={{ color: 'yellow' }} >
              <div className="container-fluid">
                  <div className="navbar-header" >
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">Mobile Store</a>
                  </div>
                 
                  <div className="collapse navbar-collapse" id="myNavbar" >
                    <ul className="nav navbar-nav navbar-right">
                        <li><NavLink to="/" className="glyphicon glyphicon-home"> Home</NavLink></li>
                        <li><NavLink to="/cart"><span className="glyphicon"> &#xe116; Cart</span></NavLink></li>
                    </ul>
                  </div>
                  
              </div>
            </nav>
        </div>
    )
}

export default Navbar

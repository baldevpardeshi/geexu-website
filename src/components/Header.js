// import logo from './logo.png';
import React from 'react';
import '../App.scss';
import {NavLink} from 'react-router-dom';

const Header = () =>  (
    <div className="container-fluid fixed-top header">
       <nav>
           <ul className="list-none">
              <li className="nav-item list-none">
                <NavLink exact className="nav-link" activeClassName="active" to="/">Home </NavLink>
              </li>
              <li className="nav-item list-none">
                <NavLink exact className="nav-link" activeClassName="active" to="/About">About Us </NavLink>
              </li>
              <li className="nav-item list-none">
                <NavLink exact className="nav-link" activeClassName="active" to="/services">Services </NavLink>
              </li>
              <li className="nav-item list-none">
                <NavLink exact className="nav-link" activeClassName="career" to="/career">Career </NavLink>
              </li>
              <li className="nav-item list-none">
                <NavLink exact className="nav-link" activeClassName="active" to="/contact">Contact Us </NavLink>
              </li>
           </ul>
       </nav>
    </div>
  );


export default Header;

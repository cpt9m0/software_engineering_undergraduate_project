import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
        <div className="navigation">
           <NavLink to="/" className="inactive" activeClassName="active" exact={true}>Home</NavLink>
           <NavLink to="/about" className="inactive" activeClassName="active" exact={true}>About</NavLink>
           <NavLink to="/contact" className="inactive" activeClassName="active" exact={true}>Contact</NavLink>
        </div>
    );
}
 
export default Navigation;
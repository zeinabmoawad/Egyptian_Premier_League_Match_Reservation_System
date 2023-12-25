// Navbar.js
import React, { useState } from 'react';
import classes from './Navbar.module.css';
const Navbar = ({ logo, links }) => {
  function handleLogout(){
    localStorage.clear();
    window.location.reload();

  }
  console.log(localStorage.getItem("userType"));
  return (
    <div className={classes.nav_bar}>
      <div className="logo"><h1>{logo}</h1></div>

      <ul className={classes.navetor_list1}>
        {links.map((link, index) => (
          <li key={index}><a href={link.path}> {link.label}</a></li>
        ))}
        {(localStorage.getItem('userType')!="guest" && localStorage.getItem('userType')!=null)?<li onClick={handleLogout}>Logout</li>:null}
      </ul>
    </div>
  );
};

export default Navbar;

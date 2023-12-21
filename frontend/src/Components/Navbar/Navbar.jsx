// Navbar.js
import React, { useState } from 'react';
import classes from './Navbar.module.css';
const Navbar = ({ logo, links }) => {
  return (
    <div className={classes.nav_bar}>
      <div className="logo"><h1>{logo}</h1></div>

      <ul className={classes.navetor_list1}>
        {links.map((link, index) => (
          <li key={index}><a href={link.path}> {link.label}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

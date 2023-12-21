import React from 'react'
import Navbar from "../Navbar/Navbar.jsx";
import classes from "./Home.module.css"
import ViewMatches from ".././Matches/ViewMatches/ViewMatches.jsx";
function Home() {
  const navbarConfig = {
    logo: 'Premier League Matches',
    links: [
      { path: '/', label: 'Home' },
      { path: '/Signup', label: 'Signup' },
      { path: '/Signin', label: 'Signin' },
    ],
  };
  return (
    <div>
      <Navbar {...navbarConfig} />
      <ViewMatches></ViewMatches>
          </div>
  )
}

export default Home
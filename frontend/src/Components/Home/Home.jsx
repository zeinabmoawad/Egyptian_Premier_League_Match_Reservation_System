import React from 'react'
import Navbar from "../Navbar/Navbar.jsx";
import classes from "./Home.module.css"
import MatchCard from '../Matches/MatchCard.jsx';
function Home() {
  const navbarConfig = {
    logo: 'Premier League Tickets',
    links: [
      { path: '/', label: 'Home' },
      { path: '/Signup', label: 'Signup' },
      { path: '/Signin', label: 'Signin' },
    ],
  };
  return (
    <div>
      <Navbar {...navbarConfig} />
      <MatchCard></MatchCard>
    </div>
  )
}

export default Home
import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import classes from "./Home.module.css";
import ViewMatches from ".././Matches/ViewMatches/ViewMatches.jsx";
function Home(props) {
  return (
    <div>
      <ViewMatches userType={props.userType}></ViewMatches>
    </div>
  );
}

export default Home;

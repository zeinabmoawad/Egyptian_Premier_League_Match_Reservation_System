import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import classes from "./Home.module.css";
import ViewMatches from ".././Matches/ViewMatches/ViewMatches.jsx";
function Home(props) {
  let links;
  switch (props.userType) {
    case "guest":
      links = [
        { path: "/", label: "Home" },
        { path: "/Signup", label: "Signup" },
        { path: "/Signin", label: "Signin" },
      ];
      break;
    case "fan":
      links = [
        { path: "/", label: "Home" },
        { path: "/Profile", label: "Profile" },
      ];
      break;
    case "FEA":
      links = [
        { path: "/", label: "Home" },
        { path: "/ViewStadium", label: "ViewStadium" },
      ];
      break;
  }
  const navbarConfig = {
    logo: "Premier League Matches",
    links: links,
  };
  return (
    <div>
      <Navbar {...navbarConfig} />
      <ViewMatches userType={props.userType}></ViewMatches>
    </div>
  );
}

export default Home;

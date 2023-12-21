import "./App.css";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginSignup/LoginSignup";
import MatchDetails from "./Components/MatchDetails/MatchDetails";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import UserProfileCard from "./Components/UserProfileCard/UserProfileCard";
import Seats from "./Components/seats/seats";
import Seat from "./Components/seats/seat";
import { Col } from "react-bootstrap";
import ViewMatches from "./Components/Matches/ViewMatches/ViewMatches";
import ViewStadium from "./Components/Stadium/ViewStadium/ViewStadium";
import ViewTickets from "./Components/ViewTickets/ViewTickets";
import DeleteUser from "./Components/User/DeleteUser/DeleteUser";
import UserRequest from "./Components/User/Requests/UserRequest";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home.jsx";
import Profile from "./Components/ProfilePage/profile.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
function App() {
  const user = "FEA";
  let links;
  switch (user) {
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
        { path: "/Tickets", label: "Tickets" },
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
    <div className="App">
      <Navbar {...navbarConfig} />

      {/* <DeleteUser></DeleteUser> */}
      {/* <UserRequest /> */}
      {/* <ViewMatches userType="FEA"></ViewMatches> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home userType={user}></Home>} />
          <Route path="/Signup" element={<Signup></Signup>} />
          <Route path="/Signin" element={<Login></Login>} />
          <Route
            path="/MatchDetails/:matchid"
            element={<MatchDetails userType={user}></MatchDetails>}
          />
          <Route path="/Profile" element={<Profile></Profile>} />
          <Route
            path="/ViewStadium"
            element={<ViewStadium userType={user}></ViewStadium>}
          />
          <Route path="/Tickets" element={<ViewTickets></ViewTickets>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

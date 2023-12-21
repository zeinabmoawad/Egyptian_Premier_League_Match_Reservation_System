import "./App.css";
import {BrowserRouter,Router,Routes,Route } from "react-router-dom";
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
import Signup from './Components/Signup/Signup'
import Home from "./Components/Home/Home.jsx";
function App() {
  const user = "guest";
  return (
    <div className="App">
      {/* <DeleteUser></DeleteUser> */}
      {/* <UserRequest /> */}
      {/* <ViewMatches userType="FEA"></ViewMatches> */}
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/Signup" element={<Signup></Signup>} />
          <Route path="/Signin" element={<Login></Login>} />
          <Route path="/MatchDetails/:matchid" element={<MatchDetails></MatchDetails>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

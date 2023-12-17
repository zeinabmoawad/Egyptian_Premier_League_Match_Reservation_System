import "./App.css";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import MatchDetails from "./Components/MatchDetails/MatchDetails";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import UserProfileCard from "./Components/UserProfileCard/UserProfileCard";
import Seats from "./Components/seats/seats";
import Seat from "./Components/seats/seat";
import { Col } from "react-bootstrap";
import ViewMatches from './Components/Matches/ViewMatches/ViewMatches'
import ViewStadium from'./Components/Stadium/ViewStadium'
function App() {
  const seats = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <ViewStadium></ViewStadium>
      {/* <ViewMatches userType="FEA"></ViewMatches> */}
      {/* <Router>
      <div>
       <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/Signup" element={<Signup></Signup>} />
          <Route path="/Signin" element={<Login></Login>} />
          </Routes>
      </div>
    </Router> */}
     </div>
  );
}

export default App;

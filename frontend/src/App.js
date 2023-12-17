import "./App.css";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import MatchDetails from "./Components/MatchDetails/MatchDetails";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import UserProfileCard from "./Components/UserProfileCard/UserProfileCard";
import Seats from "./Components/seats/seats";
import Seat from "./Components/seats/seat";
import ViewMatches from "./Components/Matches/ViewMatches/ViewMatches";
import { Col } from "react-bootstrap";
import ViewMatches from './Components/Matches/ViewMatches/ViewMatches'
function App() {
  return (
    <div className="App">
      <ViewMatches userType="FEA"></ViewMatches>
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

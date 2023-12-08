import "./App.css";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import MatchDetails from "./Components/MatchDetails/MatchDetails";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import UserProfileCard from "./Components/UserProfileCard/UserProfileCard";
import ViewMatches from "./Components/ViewMatches/ViewMatches";
import Seats from "./Components/seats/seats";
import Seat from "./Components/seats/seat";
import { Col } from "react-bootstrap";

function App() {
  const seats = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <MatchDetails />
    </div>
  );
}

export default App;

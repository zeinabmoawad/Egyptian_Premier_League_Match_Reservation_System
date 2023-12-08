import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from"./Components/Home/Home.jsx"
import Signup from"./Components/Signup/Signup.jsx"
import Login from './Components/LoginSignup/LoginSignup';
import MatcchesView from './Components/Matches/View/ViewMatches/ViewMatches.jsx'
function App() {
  return (

    <div className="App">
      <MatcchesView></MatcchesView>
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

// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Feedback from './pages/Feedback/Feedback';
import DoctorDetails from './pages/DoctorDetails/DoctorDetails';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/feedback" element={<Feedback />} />
          <Route exact path="/doctor" element={<DoctorDetails />} />
          
          
        </Routes>
      </div>

    </Router>
  );
}

export default App;

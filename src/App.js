import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import Booking from "./components/BookingPage";
import About from "./components/About";
import Confirmation from "./components/Confirmation";
import { AuthProvider } from "./components/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/booking/:hostelId" element={<Booking />} />
            <Route
              path="/confirmation/:hostelId/:roomType"
              element={<Confirmation />}
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

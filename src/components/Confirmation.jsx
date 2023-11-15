import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Confirmation = () => {
  const { hostelId, roomType } = useParams();

  // Fetch additional information based on hostelId and roomType if needed

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Confirmation Page</h1>
        <p>Hostel ID: {hostelId}</p>
        <p>Room Type: {roomType}</p>
        {/* Additional confirmation details can be added here */}
      </div>
    </div>
  );
};

export default Confirmation;

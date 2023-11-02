import React, { useState } from "react";
import Navbar from "./Navbar";

const Booking = () => {
  const [roomType, setRoomType] = useState("single");
  const [roomPrice, setRoomPrice] = useState(100);

  const handleRoomTypeChange = (event) => {
    const selectedType = event.target.value;
    // You can define room prices based on room type here
    let price = 0;
    if (selectedType === "single") {
      price = 100;
    } else if (selectedType === "double") {
      price = 150;
    } else if (selectedType === "self-contained") {
      price = 200;
    }
    setRoomType(selectedType);
    setRoomPrice(price);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row pt-4">
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Hostel"
              className="img-fluid w-100 h-75"
            />
            <p>Caption for Hostel Image</p>
            <div className="pagination">
              <a href="#">&laquo; Previous</a>
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">Next &raquo;</a>
            </div>
          </div>
          <div className="col-md-6">
            <h1>Hostel Name</h1>
            <p>Location: Hostel Location</p>
            <p>Custodian Contact: Custodian's Contact Information</p>
            <p>Amenities: List of Amenities</p>
            <p>Ratings: 4.5 (You can use star ratings)</p>
            <p>Reviews: 10 Reviews</p>

            <div className="form-group">
              <label htmlFor="roomType">Choose Room Type:</label>
              <select
                id="roomType"
                className="form-control"
                onChange={handleRoomTypeChange}
                value={roomType}
              >
                <option value="single">Single Room</option>
                <option value="double">Double Room</option>
                <option value="self-contained">Self-Contained Room</option>
              </select>
            </div>
            <p>Room Price: ${roomPrice} per night</p>

            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

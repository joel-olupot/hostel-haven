//template for home page
import React from "react";
import Navbar from "./Navbar";

function HomePage() {
  // Sample hostel data
  const hostels = [
    {
      id: 1,
      name: "Hostel A",
      location: "Kikoni",
      description: "A beautiful hostel.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Hostel B",
      location: "Kikoni",
      description: "Enjoy your stay here.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Hostel C",
      location: "Wandegeya",
      description: "Experience the best.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Hostel D",
      location: "Kasubi",
      description: "Enjoy your stay here.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Hostel E",
      location: "Kikoni",
      description: "Enjoy your stay here.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Hostel F",
      location: "Kikumi-Kikumi",
      description: "Enjoy your stay here.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Hostel G",
      location: "Kasubi",
      description: "Enjoy your stay here.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Hostel H",
      location: "Kasubi",
      description: "Enjoy your stay here.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Hostel I",
      location: "Kikoni",
      description: "Enjoy your stay here.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      name: "Hostel J",
      location: "Nankulabye",
      description: "Enjoy your stay here.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 11,
      name: "Hostel K",
      location: "Kikoni",
      description: "Enjoy your stay here.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 12,
      name: "Hostel L",
      location: "Kikumi-Kikumi",
      description: "Enjoy your stay here.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {hostels.map((hostel) => (
            <div key={hostel.id} className="col-md-3 mb-4">
              <div className="card">
                <img
                  src={hostel.imageUrl}
                  className="card-img-top"
                  alt={hostel.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{hostel.name}</h5>
                  <p className="card-text">{hostel.location}</p>
                  <p className="card-text">{hostel.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

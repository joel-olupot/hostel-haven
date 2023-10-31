//template for home page
import React from "react";

function HomePage() {
  // Sample hostel data
  const hostels = [
    {
      id: 1,
      name: "Hostel A",
      location: "City 1",
      description: "A beautiful hostel in the heart of City 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Hostel B",
      location: "City 2",
      description: "Enjoy your stay at Hostel B in City 2.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Hostel C",
      location: "City 3",
      description: "Experience City 3 from Hostel C.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Hostel Details</h1>
      <div className="row">
        {hostels.map((hostel) => (
          <div key={hostel.id} className="col-md-4 mb-4">
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
  );
}

export default HomePage;

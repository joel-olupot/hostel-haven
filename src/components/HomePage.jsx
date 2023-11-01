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
    {
      id: 4,
      name: "Hostel D",
      location: "City 3",
      description: "Experience City 3 from Hostel D.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Hostel E",
      location: "City 3",
      description: "Experience City 3 from Hostel E.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Hostel F",
      location: "City 3",
      description: "Experience City 3 from Hostel F.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Hostel G",
      location: "City 3",
      description: "Experience City 3 from Hostel G.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Hostel H",
      location: "City 3",
      description: "Experience City 3 from Hostel H.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Hostel I",
      location: "City 3",
      description: "Experience City 3 from Hostel I.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      name: "Hostel J",
      location: "City 3",
      description: "Experience City 3 from Hostel J.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 11,
      name: "Hostel K",
      location: "City 3",
      description: "Experience City 3 from Hostel K.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 12,
      name: "Hostel L",
      location: "City 3",
      description: "Experience City 3 from Hostel L.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            HOSTEL HAVEN
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link text-light active"
                  aria-current="page"
                  href="#"
                >
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  ABOUT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  UPLOAD
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link text-light dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ACCOUNT
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      SIGN IN
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      SIGN UP
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      LOG OUT
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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

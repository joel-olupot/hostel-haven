import React from "react";

const Navbar = () => {
  return (
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
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link text-light active"
                aria-current="page"
                href="/home"
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
            <li class="nav-item">
              <a class="nav-link text-light" href="/login">
                LOGIN
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/signup">
                SIGNUP
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

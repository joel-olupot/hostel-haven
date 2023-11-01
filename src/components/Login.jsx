import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log("Logging in with username:", username);
  };

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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow mt-5 bg-white rounded">
              <div className="card-header border-0">
                <h2 className="text-primary text-center">HOSTEL HAVEN</h2>
                <p className="text-center mt-4">LOGIN TO YOUR ACCOUNT</p>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-floating my-3">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder=""
                    />
                    <label
                      htmlFor="username"
                      className="form-label text-center"
                    >
                      Username
                    </label>
                  </div>
                  <div className="form-floating my-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder=""
                    />
                    <label
                      htmlFor="password"
                      className="form-label text-center"
                    >
                      Password
                    </label>
                  </div>
                  <div className="text-center my-2">
                    <button
                      type="button"
                      className="btn btn-primary border-0"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>
                  <div class="container">
                    <div class="row align-items-start">
                      <div class="col-5">
                        <button type="button" className="btn btn-primary">
                          Forgot password?
                        </button>
                      </div>
                      <div class="col-4">
                        <p>Already have account?</p>
                      </div>
                      <div class="col-3">
                        <button type="button" className="btn btn-primary">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

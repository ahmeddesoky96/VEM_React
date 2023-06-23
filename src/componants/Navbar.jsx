import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./CSS/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav class="navbar  navbar-expand-sm">
        <div class="container">
          <Link className="navbar-brand" to="/" id="logo">
            VEM
          </Link>
          <button
            class="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <i class="bi bi-list"></i>
          </button>
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header ms-auto">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body" id="navbarNav">
              <ul
                class="navbar-nav justify-content-end mx-auto"
                id="linksHolder"
              >
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" end>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/Projects">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/About">
                    About
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/Contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <Link className="btn btn-outline-primary" to="/Signin">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

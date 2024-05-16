import React from "react";
import coffeeImage from "../src/assets/images/coffe.png";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand bg-body-tertiary"
      aria-label="Thirteenth navbar example"
    >
      <div className="container-fluid">
        {/* Navbar toggler button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample11"
          aria-controls="navbarsExample11"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content: links and dropdown */}
        <div
          className="collapse navbar-collapse d-lg-flex"
          id="navbarsExample11"
        >
          {/* Brand logo and name */}
          <a className="navbar-brand col-lg-3 me-0" href="/">
            Coffee by Albi <img src={coffeeImage} alt="" /> {/* Use the imported image */}
          </a>
          {/* Navigation links with a dropdown */}
          <ul className="navbar-nav col-lg-6 justify-content-lg-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Sip. Inspire. Create
              </a>
            </li>
          </ul>
          {/* Custom button on the right */}
          <div className="d-lg-flex col-lg-3 justify-content-lg-end">
            <button className="btn btn-custom">MAP</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

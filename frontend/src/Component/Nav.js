import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                SignUp
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/signin">
                SignIn
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

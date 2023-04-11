import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header";

export class Header extends Component {
  render() {
    return (
      <nav className="md:flex flex-cols  justify-between md:mx-36 items-center mt-5">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-semibold md:ms-0 ms-5">JobsCareer</h1>
          </Link>
        </div>

        <div>
          <ul className="items-center space-x-12 lg:flex">
            <li>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                aria-label="statistics"
                title="statistics"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                statistics
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/appliedjobs"
                aria-label="appliedjobs"
                title="appliedjobs"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                appliedjobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Blogs"
                aria-label="Blogs"
                title="Blogs"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <button className="bg-blue-400 rounded-md p-3  text-white font-semibold md:ms-0 ms-5 md:mt-0 mt-5">
            Star Applying
          </button>
        </div>
      </nav>
    );
  }
}

export default Header;

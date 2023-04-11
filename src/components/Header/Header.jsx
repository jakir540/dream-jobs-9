import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <nav className="md:flex  justify-between mx-36 items-center mt-5">
        <div>
          <Link to='/'><h1 className="text-2xl font-semibold">JobsCareer</h1></Link>
        </div>
        <div className="flex">
          
            <Link className="mx-10" to="/statistics">Statistics</Link>
            <Link className="mx-10" to="/appliedjobs">Applied Jobs</Link>
            <Link className="mx-10" to="blogs">Blogs</Link>
          </div>
       
        <div>
          <button className="bg-blue-400 rounded-md p-3  text-white font-semibold">Star Applying</button>
        </div>
      </nav>
    );
  }
}

export default Header;

import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <nav className="md:flex flex-cols  justify-between md:mx-36 items-center mt-5">
        <div>
          <Link to='/'><h1 className="text-2xl font-semibold md:ms-0 ms-5">JobsCareer</h1></Link>
        </div>
        <div className="md:flex flex-cols md:my-0 my-5 ">
          
            <Link className="md:mx-10 mx-5 mt-5" to="/statistics">Statistics</Link>
            <Link className="md:mx-10 mx-5 mt-5" to="/appliedjobs">Applied Jobs</Link>
            <Link className="md:mx-10 mx-5 mt-5" to="blogs">Blogs</Link>
          </div>
       
        <div>
          <button className="bg-blue-400 rounded-md p-3  text-white font-semibold md:ms-0 ms-5 md:mt-0 mt-5">Star Applying</button>
        </div>
      </nav>
    );
  }
}

export default Header;

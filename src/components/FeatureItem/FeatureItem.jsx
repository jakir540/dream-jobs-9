import React from "react";
import {} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { addToDb } from "../utilities/utilities";

const FeatureItem = ({ feature }) => {
  const {
    company_logo,
    company_name,
    job_title,
    location,
    
    salary,
    remote_job,
    fulltime,
    id,
  } = feature;
 
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-16 h-16 rounded-md"
            src={company_logo}
            alt="Company logo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {job_title}
            <div className="badge badge-secondary">NEW JOB</div>
          </h2>

          <div className="card-actions justify-start my-4">
            <div className="rounded-md btn-outline border text-blue-700 font-semibold px-5 py-2">
              {remote_job ? "Remote":"Onsite"}
            </div>
            <div className="rounded-md btn-outline border text-blue-700 font-semibold px-5 py-2">
              {fulltime}
            </div>
          </div>



          <div className="flex mx-5 my-4">
            <p className="flex">
              <span className="mx-2"><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg></span>
              {location}
            </p>
            <p>Salary : {salary}</p>
          </div>





          <Link to={`/jobDetails/${id}`}>
          <button className="rounded-md w-32 bg-blue-400 font-semibold px-5 py-2">
            View Details
          </button>
          
          </Link>
        </div>
      </div>

     
    </div>
  );
};

export default FeatureItem;

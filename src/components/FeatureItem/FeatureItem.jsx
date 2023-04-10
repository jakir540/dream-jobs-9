import React from "react";

const FeatureItem = ({ feature }) => {

    const {company_logo,company_name,job_title,location,onsite_job,salary
    } = feature;
  console.log(feature);
  return (
    <div>




      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-16 h-16 " 
            src={company_logo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {job_title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          
          <div className="card-actions justify-start">
            <div className="rounded-md btn-outline border text-blue-700 font-semibold px-5 py-2">{onsite_job? "Remort": "Onsite"}</div>
            <div className="rounded-md btn-outline border text-blue-700 font-semibold px-5 py-2">Products</div>
          </div>
          <div className="flex mx-5">
            <p className="mx-5">location : {location}</p>
            <p>Salary : {salary}</p>
          </div>
        </div>
      </div>



    </div>
  );
};

export default FeatureItem;

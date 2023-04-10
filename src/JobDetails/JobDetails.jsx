import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  CurrencyDollarIcon,
  PresentationChartBarIcon,
  PhoneArrowUpRightIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/24/solid";

const JobDetails = () => {
  const jobDetails = useLoaderData();

  const {
    phone,
    email,
    job_title,
    location,
    onsite_job,
    salary,
    remote_job,
    fulltime,
    experience,
    job_description,
    job_responsibility,
    education_requirements,
  } = jobDetails;

  return (
    <div>
      <h1 className="text-center text-4xl my-10">Job Description </h1>

      <div className="flex w-full justify-center  items-center px-36">


        <div className="w-1/2 p-16 text-2xl">

          <p className="font-semibold py-4">Job Description: <span className="text-gray-500 text-base">{job_description}</span></p>
          <p className="font-semibold py-4">Job Responsibility: <span className="text-gray-500 text-base">{job_responsibility}</span></p>


         
          <h3 className="font-semibold py-4">
            Educational Requirement : <br />
            <span className="text-gray-500 text-base">{education_requirements}</span>{" "}
          </h3>
          <h3 className="font-semibold py-4">
          Experience : <br />
            <span className="text-gray-500 text-base">{experience}</span>{" "}
          </h3>


         
        </div>



        <div>
          <div className="card w-96 bg-blue-200 text-gray-950">
            <div className="card-body divide-y divide-gray-400">
              <h2 className="card-title">Job Details</h2>

              <div className="py-5">
                <p className="flex py-2">
                  <span>
                    <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                  </span>{" "}
                  Salary : {salary}
                </p>
                <p className="flex py-2">
                  <span>
                    <PresentationChartBarIcon className="h-6 w-6 text-blue-500" />
                  </span>{" "}
                  Job Title : {job_title}
                </p>
                <h2 className="text-2xl">Contact Information</h2>
              </div>

              <div className="py-5">
                <p className="flex py-2">
                  <span>
                    <PhoneArrowUpRightIcon className="h-6 w-6 text-blue-500" />
                  </span>{" "}
                  Phone : {phone}
                </p>
                <p className="flex">
                  <span>
                    <EnvelopeIcon className="h-6 w-6 text-blue-500" />
                  </span>{" "}
                  Email : {email}
                </p>
                <p className="flex py-2">
                  <span>
                    <MapIcon className="h-6 w-6 text-blue-500" />
                  </span>{" "}
                  Address : {location}
                </p>
              </div>

              <div className="card-actions justify-end py-5">
                <button className="bg-blue-400 btn w-full border-none">Apply Now</button>
              </div>
            </div>
          </div>
        </div>


      </div>



    </div>
  );
};

export default JobDetails;

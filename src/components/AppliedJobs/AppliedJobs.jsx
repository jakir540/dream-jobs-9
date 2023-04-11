import React, { useEffect, useState } from "react";
import { getjobsCart } from "../utilities/utilities";
import ShowApliedJobs from "./ShowApliedJobs/ShowApliedJobs";

const AppliedJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [findJob, setFindJob] = useState([]);

  useEffect(() => {
    fetch("Featured.json")
      .then((res) => res.json())
      .then((data) => setAllJobs(data.jobs));
  }, []);

  useEffect(() => {
    const storedJobs = getjobsCart();
    const savedJobs = [];

    for (const id in storedJobs) {
      const addedJobs = allJobs.find((job) => job.id === Number.parseInt(id));
      if (addedJobs) {
        savedJobs.push(addedJobs);
      }
    }
    setFindJob(savedJobs);
  }, [allJobs]);

  const handleFilter = (e) => {
    let remoteJb = [];
    if (e.target.value === "remote") {    
      const romoteJobs = findJob.filter((job) => job.remote_job === true);
      remoteJb= [...romoteJobs];
      setFindJob(remoteJb);
    } else if (e.target.value === "onsite") {
      const romoteJobs = findJob.filter((job) => job.remote_job === false);
      remoteJb= [...romoteJobs];
      setFindJob(remoteJb);
    }
    console.log(remoteJb);
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold my-8">Applied Jobs</h1>

      <div>
        <div className="flex justify-center ms-96">
          <input
            onChange={() => handleFilter(event)}
            placeholder="searce job type"
            className=" rounded-md p-3  w-48 max-w-xs border-none bg-slate-300"
          ></input>
        </div>
        {findJob.map((job) => (
          <ShowApliedJobs key={job.id} job={job}></ShowApliedJobs>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;

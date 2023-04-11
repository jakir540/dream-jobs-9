import React, { useEffect, useState } from "react";
import { getjobsCart } from "../utilities/utilities";
import ShowApliedJobs from "./ShowApliedJobs/ShowApliedJobs";

const AppliedJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [findJob, setFindJob] = useState([]);
  console.log(findJob);

  useEffect(() => {
    fetch("Featured.json")
      .then((res) => res.json())
      .then((data) => setAllJobs(data.jobs));
  }, []);

  useEffect(() => {
    const storedJobs = getjobsCart();
    const savedJobs = [];

    for (const id in storedJobs) {
      const addedProduct = allJobs.find(
        (job) => job.id === Number.parseInt(id)
      );
      if (addedProduct) {
        savedJobs.push(addedProduct);
      }
    }
    setFindJob(savedJobs);
  }, [allJobs]);

  return <div>

    <h1 className="text-center text-3xl font-semibold my-8">
      Applied Jobs
    </h1>
        
    {
      findJob.map(job => <ShowApliedJobs key={job.id} job={job}></ShowApliedJobs>)
    }




  </div>;
};

export default AppliedJobs;

import React, { useState } from "react";

import FeatureItem from "../FeatureItem/FeatureItem";

const Feature = ({ featuredData }) => {
  const [showAll , setShowAll] = useState(false);
  const { jobs } = featuredData;
  

  const handleClickBtn =()=>{
    setShowAll(true)
  }

  return (
   <section>
    <div className="flex items-center justify-center my-10">
      <div>
        <div className="text-center mb-16 ">
          <h1 className="text-5xl font-semibold mb-5">Featured Jobs</h1>
          <p className="my-5 text-gray-600 font-semibold">
            Explore the all countries jobs and try to find your dream jobs this
            website{" "}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-center w-full mx-auto">
          {jobs?.slice(0,showAll ? 6: 4).map((feature) => (
            <FeatureItem key={feature.id} feature={feature}></FeatureItem>
          ))}
        </div>
      </div>
    </div>
    
    {
      jobs.length === 6 && <div className="flex justify-center  "  >
      <button onClick={handleClickBtn} className="rounded-md w-32 bg-blue-400 font-semibold px-5 py-2 " >Show More</button>
      </div>
    }

      </section>
  );
};

export default Feature;

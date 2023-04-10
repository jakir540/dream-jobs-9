import React from "react";

const Categories = ({ categorie }) => {
  const { category_logo, category_name, jobs_available } = categorie;
  console.log(categorie);
  return (
    <>

      <div className="card w-96 bg-base-200 shadow-xl text-start">
        <figure>
          <img className="w-16 h-16 rounded-md mt-4"
            src={category_logo}
            
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-3xl font-semibold ">{category_name}</h2> 
          <p className="font-semibold text-gray-600">{jobs_available} Jobs Available</p>         
        
        </div>
      </div>

    </>
  );
};

export default Categories;

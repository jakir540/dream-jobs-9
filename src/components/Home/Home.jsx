import React from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";

const Home = () => {
  const categoryData = useLoaderData();
  const {categories} = categoryData
  console.log(categories.length);
  return (
    <>
    <div className="flex justify-evenly mt-14">
      <div className="w-1/3">
        <h1 className="text-6xl font-bold tracking-wide py-5 leading-tight">
         The Next Step <br /> Closer To Find Your <br /> <span className="text-blue-400">Dream Jobs</span>
        </h1>
        <p className="break-all text-gray-600 font-semibold">According to research by Remitly, globally, the top ten dream jobs are the following. And dream jobs numbers 11 through 20 are: DJ, blogger, doctor, professor, flight attendant, firefighter, judge, lawyer, attorney and psychologis</p>
        <button className="bg-blue-400 rounded-md p-3 mt-4  text-white font-semibold">Get Started</button>
      </div>
      <div>
        <img className="rounded-lg"
          src="src/assets/photohome.jpg"
          alt=""
        />
      </div>
    </div>

    <div className="categori-item  w-full mt-16">
      <div className="text-center">
      <h1 className="text-5xl font-semibold text-gray-900 my-5">Job Category List </h1>
      <p className="text-gray-600  font-semibold">Job category means a broad-based group of employees with comparable job responsibilities</p>
      </div>
    <div className="flex justify-center my-8 gap-5">
    {
      categories.map(categorie => <Categories key={categorie.id} categorie={categorie}></Categories>)
    }
    </div>

    </div>

    </>
  );
};

export default Home;

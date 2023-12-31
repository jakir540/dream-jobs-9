import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import './Home.css'
import Feature from "../Feature/Feature";

const Home = () => {
  const featuredData =useLoaderData();
 
 

  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <div>
      <div className="flex-cols md:flex  md:justify-evenly mt-14">
        <div className=" md:w-1/3 w-full">
          <h1 className="md:text-6xl text-3xl font-bold tracking-wide py-8 leading-tight">
            The Next Step <br /> Closer To Find Your <br />{" "}
            <span className="text-blue-400">Dream Jobs</span>
          </h1>
          <p className="break-all text-center text-gray-600 font-semibold">
            According to research by Remitly, globally, the top ten dream jobs
            are the following. And dream jobs numbers 11 through 20 are: DJ,
            blogger, doctor, professor, flight attendant, firefighter, judge,
            lawyer, attorney and psychologis
          </p>
          <div className="mt-10 image">
          <button className="bg-blue-400 rounded-md p-3 mt-6  text-white font-semibold md:m-0 m-5">
            Get Started
          </button>
          </div>
        </div>
        <div className="sm:m-5 ">
          <img className="rounded-lg image" src="https://media.istockphoto.com/id/1424988699/photo/businessman-contemplating-in-the-office-looking-through-the-window.jpg?b=1&s=170667a&w=0&k=20&c=jlF3Ihf5kO3-6dWUGhj8WTuB1Z2tiACre770YowcMTA=" alt="" />
        </div>
      </div>

      <div className="categori-item  w-full mt-16">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-gray-900 my-10">
            Job Category List{" "}
          </h1>
          <p className="text-gray-600  font-semibold">
            Job category means a broad-based group of employees with comparable
            job responsibilities
          </p>
        </div>
        <div className="flex-cols md:flex  md:justify-center md:my-14 my-10 md:gap-5 gap-5">
          {categories.map((categorie) => (
            <Categories key={categorie.id} categorie={categorie}></Categories>
          ))}
        </div>
      </div>

    
    <Feature featuredData={featuredData}></Feature>


      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;

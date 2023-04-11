import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Feature from "../Feature/Feature";

const Home = () => {
  const featuredData =useLoaderData();
 
 

  const [categories, setCategories] = useState([]);
// useEffect(async()=>{
//   const loadedProducts = await fetch('category.json');
//     const products = await loadedProducts.json();
//     setCategories(products)

// },[])






  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <div>
      <div className="flex-cols md:flex  md:justify-evenly mt-14">
        <div className=" md:w-1/3 w-full">
          <h1 className="md:text-6xl text-3xl font-bold tracking-wide py-5 leading-tight">
            The Next Step <br /> Closer To Find Your <br />{" "}
            <span className="text-blue-400">Dream Jobs</span>
          </h1>
          <p className="break-all text-center text-gray-600 font-semibold">
            According to research by Remitly, globally, the top ten dream jobs
            are the following. And dream jobs numbers 11 through 20 are: DJ,
            blogger, doctor, professor, flight attendant, firefighter, judge,
            lawyer, attorney and psychologis
          </p>
          <button className="bg-blue-400 rounded-md p-3 mt-4  text-white font-semibold md:m-0 m-5">
            Get Started
          </button>
        </div>
        <div className="sm:m-5">
          <img className="rounded-lg" src="src/assets/photohome.jpg" alt="" />
        </div>
      </div>

      <div className="categori-item  w-full mt-16">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-gray-900 my-5">
            Job Category List{" "}
          </h1>
          <p className="text-gray-600  font-semibold">
            Job category means a broad-based group of employees with comparable
            job responsibilities
          </p>
        </div>
        <div className="flex-cols md:flex  md:justify-center md:my-8 my-10 md:gap-5 gap-5">
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

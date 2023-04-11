import React, { useEffect, useState } from 'react';
import { getjobsCart } from '../utilities/utilities';

const AppliedJobs = () => {

    const [jobs , setJobs ]=useState([])
    // console.log(jobs.jobs);


    const getJobsCartFromDb = getjobsCart();
    // console.log(getJobsCartFromDb);

    useEffect(() => {
        fetch("Featured.json")
          .then((res) => res.json())
          .then((data) => setJobs(data));
      }, []);






    const handleAddToCart = (product) => {
        // let newcart = [...cart, product];
        // setCart(newcart);
        // console.log(cart);
    
        let newCart = [];
        const exists = cart.find((pd) => pd.id === product.id);
        if (!exists) {
          product.quantity = 1;
          newCart = [...cart, product];
        } else {
          exists.quantity = exists.quantity + 1;
          const remaining = cart.filter((pd) => pd.id !== product.id);
          newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id);
      };
    
      const handleClearCart =()=>{
        setCart([]);
        deleteShoppingCart();
      }


















    return (
        <div>
            this is the AppliedJobs components
            {/* <p>{jobs.jobs.length}</p> */}
        </div>
    );
};

export default AppliedJobs;
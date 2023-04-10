import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FeatureItem from '../FeatureItem/FeatureItem';

const Feature = () => {
    const {jobs} = useLoaderData();
    console.log(jobs.length);
    
    return (
        <div className='flex items-center justify-center my-10'>
            <div>
            <div className='text-center mb-16 '>
            <h1 className='text-5xl font-semibold mb-5'>Featured Jobs</h1>
            <p className='my-5 text-gray-600 font-semibold'>Explore the all countries jobs and try to find your dream jobs this website </p>
            </div>
        <div className='grid grid-cols-2 gap-8 text-center w-full mx-auto'>
            {
                jobs.map(feature => <FeatureItem key={feature.id} feature ={feature}></FeatureItem>)
            }
        </div>
            
        </div>
        </div>
    ); 
};

export default Feature;
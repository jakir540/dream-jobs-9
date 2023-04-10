import React from 'react';

const Blogs = () => {
    return (
        <div>
           <div className='p-8 w-full'>
            
            <div className='p-5 border bg-blue-300 rounded-lg my-5 shadow-md'>
            <div className="question text-3xl font-semibold text-gray-950 p-5 "><h1> Q1. What is Context Api and When use it?</h1></div>
            <div className="answer tracking-wide font-semibold text-gray-700">Ans: Context provides a way to pass data through the component tree without having to pass props down manually at every level. The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.The Context API helps share data between components which we can't easily share with props, for example, complex data objects </div>
           </div>


            <div className='p-5 border bg-blue-300 rounded-lg my-5 shadow-md'>
            <div className="question text-3xl font-semibold text-gray-950 p-5 "><h1> Q1. What is Custom Hook?</h1></div>
            <div className="answer tracking-wide font-semibold text-gray-700">Ans: Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React application.its use for The main reason to write a custom hook is for code reusability. For example, instead of writing the same code across multiple components that use the same common stateful logic (say a “setState” or localStorage logic), you can put that code inside a custom hook and reuse it. </div>
           </div>

           
            <div className='p-5 border bg-blue-300 rounded-lg my-5 shadow-md'>
            <div className="question text-3xl font-semibold text-gray-950 p-5 "><h1> Q1. What is useRef and When use it?</h1></div>
            <div className="answer tracking-wide font-semibold text-gray-700">Ans: It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.The useRef Hook can also be used to keep track of previous state values.This is because we are able to persist useRef values between renders </div>
           </div>

            <div className='p-5 border bg-blue-300 rounded-lg my-5 shadow-md'>
            <div className="question text-3xl font-semibold text-gray-950 p-5 "><h1> Q1. What is Context Api and When use it?</h1></div>
            <div className="answer tracking-wide font-semibold text-gray-700">Ans: The React useMemo Hook returns a memoized value.Think of memoization as caching a value so that it does not need to be recalculated.The useMemo Hook only runs when one of its dependencies update.This can improve performance.The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function </div>
           </div>


            </div>
           
        </div>
    );
};

export default Blogs;

import React, { useState } from 'react';
import Pdf from "react-to-pdf";
import { HiDownload } from 'react-icons/hi';


const Blog = () => {

    const ref = React.createRef();
	







    return (
        <div className='container-fluid '>




  <p className='sm:bg-blue-500 p-2 sm:text-white sm:rounded-full text-center text-3xl font-bold my-2 px-2'>This blog has some important questions and answers which are very useful</p>


  <div className="row justify-center my-5 ">

<Pdf targetRef={ref} filename="Chef's Address.pdf">
        {({ toPdf }) => <button className='btn hover:text-white bg-lime-500 text-black border-none' onClick={toPdf}>
         
            Download Pdf    <HiDownload className='ms-2 text-lg'/></button>}
 </Pdf>
</div>


<div ref={ref}>

<div   className=' my-8 sm:w-9/12 sm:mx-auto'>

<p className='bg-purple-100 rounded-lg p-2 text-3xl italic font-bold text-green-600'>Question : <span className='text-2xl text-red-600'>Tell us the differences between uncontrolled and controlled components ?

</span></p>
<p className='text-xl font-bold my-4'>
    Answer: <span className='font-normal'>In React, components can either be controlled or uncontrolled. Controlled components are components where the form data is handled by a React component, while uncontrolled components are components where the form data is handled by the DOM itself. Controlled components are typically used when the form data needs to be managed and validated by the component, while uncontrolled components are used when the form data is not important or needs to be accessed directly by the DOM.</span>
</p>
</div>



<div className=' my-10 sm:w-9/12 sm:mx-auto'>
<p className='bg-purple-100 rounded-lg p-2 text-3xl italic font-bold text-green-600'>Question : <span className='text-2xl text-red-600'>How to validate React props using PropTypes ?

</span></p>
<p className='text-xl font-bold my-4'>
    Answer: <span className='font-normal'>PropTypes is a built-in validation library in React that allows developers to specify the type and shape of props being passed to a component. To use PropTypes, you need to import the PropTypes library and define the propTypes object for the component. </span>
</p>
</div>


<div className=' my-10 sm:w-9/12 sm:mx-auto'>
<p className='bg-purple-100 rounded-lg p-2 text-3xl italic font-bold text-green-600'>Question : <span className='text-2xl text-red-600'>Tell us the difference between nodejs and express js ?

</span></p>
<p className='text-xl font-bold my-4'>
    Answer: <span className='font-normal'>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to write server-side applications in JavaScript. Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features and tools for building web applications, such as routing, middleware, and templating. While Node.js provides the base for server-side development, Express.js provides a higher-level abstraction for building web applications.</span>
</p>
</div>



<div className=' my-10 sm:w-9/12 sm:mx-auto'>
<p className='bg-purple-100 rounded-lg p-2 text-3xl italic font-bold text-green-600'>Question : <span className='text-2xl text-red-600'>What is a custom hook, and why will you create a custom hook ?

</span></p>
<p className='text-xl font-bold my-4'>
    Answer: <span className='font-normal'>A custom hook is a JavaScript function that uses React hooks such as useState, useEffect, useContext, etc. to provide a reusable piece of logic for a component. Custom hooks allow you to abstract away complex logic into a separate function that can be reused across multiple components. You can create a custom hook when you find yourself repeating the same logic across different components or when you want to separate concerns and improve the readability of your code. For example, you might create a custom hook to handle form validation, authentication, or API requests.</span>
</p>
</div>

</div>




        </div>
    );
};

export default Blog;
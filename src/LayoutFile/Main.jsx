import React from 'react';
import Navbar from '../SharedFile/Navbar/Navbar';
import Footer from '../SharedFile/Footer/Footer';
import { Outlet } from 'react-router-dom';













const Main = () => {
    return (
        <div className='container-fluid '>

        <div className="row">
        <Navbar />
            </div>    

<div className="row sectionHeight">
 
    <Outlet />
</div>

<div className="row ">
        <Footer />
</div>   


        </div>
    );
};

export default Main;
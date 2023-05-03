import React from "react";
import "./Home.css"
import { useLoaderData } from "react-router-dom";
import ShowAlldata from "../ComponentFile/ShowAlldata";








const Home = () => {

    const getData = useLoaderData()




  return (

<div className="container-fluid border border-5 border-red-700">
    

<div className="row border justify-center">
{
    getData?.map(p=><ShowAlldata key={p.chef_id} data = {p} />)
}
</div>







    </div>
  );
};

export default Home;

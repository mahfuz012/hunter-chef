import React from "react";
import "./Home.css"
import { useLoaderData } from "react-router-dom";
import ShowAlldata from "../ComponentFile/ShowAlldata";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Home = () => {

    const getData = useLoaderData()




  return (

<div className="container-fluid   border-red-700">
    

<div className="row">
<div className="sm:flex  bacground ">
<div className="  p-2 flex flex-col justify-center">
  
    <h1 style={{color:"#D48A3D"}} className="font-serif text-7xl sm:p-3 font-extrabold">
    Different chef</h1>
    <h1  className="text-white text-7xl p-3 font-mono font-extrabold">
    Different Taste</h1>
  <p className="text-white px-3"> Our chefs are dedicated to<br></br>crafting unique and innovative dishes using only the freshest ingredients sourced <br></br>locally and from around the world</p>
  <button className="mx-5 btn btn-warning my-8 w-40 ">Support Us </button>
        </div>


<div className="my-10 sm:my-2">
<img className="" src="https://i.ibb.co/r79ZRbs/Yellow-Black-Modern-Menu-Food-Banner-600-500-px.png" />
</div>



</div>

</div>








<div className="row">
  <p className="mx-auto my-5 text-3xl rounded-full bg-gray-700 py-3 px-5 text-orange-500 font-bold">All chef and their information</p>
</div>
<div className="row border justify-center">
{
    getData?.map(p=><ShowAlldata key={p.chef_id} data = {p} />)
}
</div>



<div className="bg-gradient-to-r from-black to-purple-700 sm:flex my-10 rounded-xl 
 px-3 py-2">


<div className="sm:my-auto  flex justify-center  w-7/12">
<p className="text-5xl font-bold text-yellow-200 px-3
">Here is our top <span className="font-extrabold text-purple-600">chef</span></p>
</div>

<Swiper
        slidesPerView={4}
        spaceBetween={8}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10 bg-black rounded-full"
      >


<SwiperSlide><img src="https://i.ibb.co/THhKnML/Untitled-designa-1.png"/></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/H4T7ffY/Untitled-7.png"/></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/hcNL52M/Untitled-adesign-7.png"/></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/r2r1mrH/Untitled-design.png"/></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/XSbG7NV/Untitled-design-5.png"/></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/FBSwX2S/Untitled-design-3.png"/></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/6wF1hDb/Untitled-design-4.png"/></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/xGrFM4r/Untitled-design-2.png"/></SwiperSlide>
  <SwiperSlide><img src="https://i.ibb.co/VmBsv00/Untitled-design-1.png"/></SwiperSlide>
      
      </Swiper>
  
</div>



    </div>
  );
};

export default Home;

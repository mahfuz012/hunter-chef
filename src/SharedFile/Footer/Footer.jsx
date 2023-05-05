import React from 'react';
import { FaBeer, FaFacebook, FaInstagram, FaSnapchat, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
  return (

    <div className=" bg-neutral-100 text-center  text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">

      <div className="bg-gradient-to-r from-purple-300 to-transparent via-transparent via-purple-900 flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block ">
          <span>We invite you to connect with us on social networks to stay up-to-date on our latest news: </span>
        </div>

        <div className="flex justify-center">
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaFacebook className='text-2xl text-blue-700' />
          </a>
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaTwitter className='text-2xl text-blue-700' />
          </a>
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaWhatsapp className='text-2xl text-blue-700' />
          </a>
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaInstagram className='text-2xl text-blue-700' />
          </a>
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaTelegram className='text-2xl text-blue-700' />
          </a>
          <a href="#!" className="text-neutral-600 dark:text-neutral-200">
            <FaSnapchat className='text-2xl text-blue-700' />
          </a>
        </div>
      </div>


      <div className="mx-6 py-10 text-center md:text-left ">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="">
            <h4
              className="mb-4 flex items-center justify-center font-extrabold text-3xl md:justify-start">

              Chef's Address
            </h4>
            <p>
              Indulge in our delectable creations and experience culinary excellence at our restaurant. Our chefs are dedicated to crafting unique and innovative dishes using only the freshest ingredients sourced locally and from around the world
            </p>
          </div>

          <div className="text-center">
            <h6
              className="mb-4 text-center  font-bold uppercase md:justify-start">
              Menu
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200"
              >Appetizers</a>

            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200"
              >Entrées</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200"
              >Sides</a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200"
              >Desserts</a>
            </p>
          </div>

          <div className="">
            <h6
              className="mb-4 flex justify-center font-bold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200"
              >Pricing</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200"
              >Settings</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200"
              >Orders</a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200"
              >Help</a>
            </p>
          </div>

          <div>
            <h6
              className="mb-4 flex  justify-center font-bold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">

              Italy, NY 10012
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">

              info@example.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">

              + 01 XXXXXXXX
            </p>
            <p className="flex items-center justify-center md:justify-start">

              + 01 XXXXXXXX
            </p>
          </div>
        </div>
      </div>


      <div className="bg-gradient-to-r from-purple-900 via-purple-100 to-purple-900 p-6 text-center dark:bg-neutral-700">
        <span className='font-bold text-xl'>© 2023 Copyright:</span>
        <a
          className="font-bold text-xl font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        > Chef's Address</a>
      </div>
    </div>
  )
}

export default Footer;
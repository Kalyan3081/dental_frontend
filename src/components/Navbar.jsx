import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars, FaPhone } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Maine container */}
      <nav className="bg-primary_bg text-primary_text px-6 md:px-16 lg:px-24 fixed top-0 w-full z-50 shadow-md">
        {/* sub main container  */}
        <div className="container py-3 flex justify-between items-center">
          {/* Logo container */}
          <div >
            <img src="http://www.idccindia.com/images/logo.png" alt="" />
          </div>
          {/* Details and nav bar container */}
          <div className=" justify-between items-center" >
            {/* Details  */}
            <div className="flex space-x-4 items-center mb-4">
              <FaPhone /><a href="tel:9927488027">+91 9927488027</a>{" "}
              <a href="tel:9716820045"> 9716820045 </a>
            </div>
            {/* Navbar */}
            <div className="hidden md:flex space-x-6" >
              <a href="/">Home</a>
              <a href="/whyus">Why Us</a>
              <a href="/meetthedoctors">Meet The Doctors</a>
              <a href="/procedures">Procedure</a>
              <a href="gallery">Gallery</a>
              <a href="/testimonials">Testimonials</a>
              <a href="/contactus">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

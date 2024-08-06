import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoHeartOutline, IoSearchOutline, IoCartOutline, IoPersonOutline, IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import logo from '../../assets/images/logo.png';


const Nav = () => {
  return (
  <div className='container'>
  <nav className="">
  <div className="w-full flex justify-center items-center">
  </div>
  <div className="flex justify-between items-center relative py-4 mb-6">
  <div className="w-1/4 text-black font-semibold text-xl">All in Rwanda</div>
  <div className="w-3/4 flex flex-row gap-10 justify-end">
  <a href="#home" className=" text-black">Home</a>
  <a href="#contact" className=" text-black">Contact</a>
  <a href="#about" className=" text-black">About</a>
  <a href="#signup" className=" text-black">Sign Up</a>
  <div className='flex flex-row space-x-8 ml-24 font-medium -mt-2'>
  <a href="#login" className="py-2 text-black">Login</a>
  <button className="text-white border rounded-lg bg-red-600 py-2 px-6 ">Register</button>
  </div>
  </div>
  </div>
  </nav>
    </div>
  )
}

export default Nav
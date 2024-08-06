import React from 'react'
import SingleProduct from './SingleProduct'
import image from '../../../assets/images/product.png'
import image1 from '../../../assets/images/product1.png'
import { IoMdStarOutline } from "react-icons/io";
import { MdCircle } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import FilteredProduct from "../ProductDetails/FilteredProducts";
import Nav from '../../Navbar/Nav';


const ProductDetails = () => {
  return (
    <>
    <div className='container'>
      <Nav />
      <div className='mt-20 mx-2 w-100'>
        <div>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex flex-col-reverse md:flex-row gap-20 w-100 md:w-2/3'>
            <div className='w-1/5 object-contain md:w-40 flex md:flex-col gap-2 md:gap-10'>
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
              </div>
              <div className=''>
                <img src={image1} alt="" className='object-contain'/>
              </div>
            </div>
            <div className='md:w-1/3 md:px-4 space-y-4'>
              <h1 className='font-semibold text-lg'>China tiles</h1>
              <div className='flex flex-row '>
                <IoMdStarOutline />
                <IoMdStarOutline />
                <IoMdStarOutline />
                <IoMdStarOutline />
                <IoMdStarOutline />
              </div>
              <h1 className='font-semibold text-md'>$192.00</h1>
              <h1 className='text-xs font-medium text-gray-700 border-b rounded border-gray-400 pb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi beatae ex, laborum, distinctio aliquid dolores cumque expedita officia, est rerum nemo impedit. Asperiores consequatur unde sunt minima sapiente, itaque hic.</h1>
              <div className='flex flex-row gap-2'>
              <h1 className='font-medium md:text-md'>Colours: </h1>
              <MdCircle className='text-2xl text-gray-400'/>
              <MdCircle className='text-2xl text-brandOrange'/>
              <MdCircle className='text-2xl text-black'/>
              <MdCircle className='text-2xl text-blue-400'/>
              <MdCircle className='text-2xl text-green-400'/>
              </div>
              <div className='flex flex-col md:flex-row gap-4'>
                <h1 className='mt-3 font-medium md:text-md'>Size: </h1>
                <div className='flex gap-4'>
                <p className='border p-2 md:p-4 rounded text-xs md:font-semibold'>XS</p>
                <p className='border py-2 px-3 md:p-4 rounded text-xs md:font-semibold'>S</p>
                <p className='border p-2 md:p-4 rounded text-xs md:font-semibold bg-brandOrange text-white border-brandOrange'>M</p>
                <p className='border py-2 px-3 md:p-4 rounded text-xs md:font-semibold'>L</p>
                <p className='border p-2 md:p-4 rounded text-xs md:font-semibold'>XL</p>
                </div>
              </div>
              <div className='flex flex-col md:flex-row gap-10'>
              <div className='border rounded w-40 flex flex-row'>
                <button className='border-r w-1/4 px-4 py-2 font-medium'>-</button>
                <button className='w-1/2 px-4 py-2 font-medium'>10</button>
                <button className='border-l w-1/4 px-4 py-2 bg-brandOrange font-medium'>+</button>
              </div>
              <button className='px-6 py-2 bg-brandOrange border rounded text-white text-nowrap border-brandOrange'>Buy Now</button>
              <IoHeartOutline className='border rounded text-4xl'/>
              </div>
              <div className='space-y-4 border rounded px-2 py-3'>
                <div className='flex gap-4 border-b pb-4 text-sm font-medium'>
                  <CiDeliveryTruck className='text-5xl'/>
                  <div>
                  <h1>Free Delivery</h1>
                  <p>Enter your postal code for Delivery Availability</p>
                  </div> 
                </div>
                <div className='flex gap-8 text-sm font-medium'>
                  <TfiReload className='text-3xl mt-2' />
                  <div>
                  <h1>Return Delivery</h1>
                  <p>Free 30 Days Delivery Returns. Details</p>
                  </div> 
                </div>
              </div>
            </div>
          </div>
          <FilteredProduct/>
        </div>
      </div>
      </div>
    </>
  )
}

export default ProductDetails
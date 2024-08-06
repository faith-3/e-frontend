import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";


const ForYouCard = (props) => {
  return (
    <div>
      <div className='pb-10 rounded text-sm text-serif font-semibold'>
        <div className='w-80'> 
          <div className='bg-gray-100 rounded'>
          <div className='flex flex-col items-end pr-3 gap-3 mt-4 pt-4'>
          <IoEyeOutline className='border border-white rounded-full shadow-lg bg-white text-2xl p-1'/>
          <IoHeartOutline className='border border-white rounded-full shadow-lg bg-white text-2xl p-1'/>
          </div>
          <img src={props.img} alt="#" className='border border-transparent rounded h-full w-3/4 mx-7 mb-7' />
          <button className='border rounded-b border-black text-sm bg-black text-white py-2 w-full'>Add to cart</button>
          </div>
          <div className='py-4'>
            {/* card title */}
            <h3 className='py-2'>
              <a href="#">{props.title}</a>
            </h3>
            {/* card description */}
            <p>{props.desc}</p>
            {/* card price */}
            <p className='pb-2'>{props.price}</p>
            <div className='flex flex-row gap-1'>
            <IoMdStarOutline />
            <IoMdStarOutline />
            <IoMdStarOutline />
            <IoMdStarOutline />
            <IoMdStarOutline />
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ForYouCard
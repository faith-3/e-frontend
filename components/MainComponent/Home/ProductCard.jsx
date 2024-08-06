import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";


const  ProductCard = (props) => {
  return (
    <div>
      <div className='pb-10 rounded text-sm text-serif font-semibold'>
        <div className='w-64'> 
          <div className='bg-gray-100 rounded'>
          <div className='flex flex-col items-end pr-3 mt-4 pt-4'>
          <IoHeartOutline className='border border-white rounded-full shadow-lg bg-white text-2xl p-1'/>
          </div>
          <img src={props.img} alt="#" className='border border-transparent rounded h-40 w-3/4 object-contain mx-7 mb-2 pb-8' />
          </div>
          <div className=''>
            <div className='flex justify-between'>
            <h3 className='py-2'>
              <a href="#">{props.title}</a>
            </h3>
            <p className='pb-2 text-brandOrange'>{props.price}</p>
            </div>
            <p className='text-gray-400 font-normal font-serif'>{props.desc}</p>
            <div className='flex flex-row gap-1'>
            {[...Array(1)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.538 1.117l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.571-1.838-.196-1.538-1.117l1.287-3.951a1 1 0 00-.364-1.118L2.316 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                  </svg> 
                ))}
                <span className='text-brandGrey '>({props.stars})</span>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
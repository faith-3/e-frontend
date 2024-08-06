import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMdStarOutline } from "react-icons/io";


const Card = (props) => {
  return (
    <div>
      <div className='pb-10 rounded text-sm text-serif font-semibold'>
        <div className='w-80'> 
          <div className='bg-gray-100 rounded'>
          <div className='flex flex-col items-end pr-3 gap-3 mt-4 pt-4'>
          <RiDeleteBin5Line className='border border-white rounded-full shadow-lg bg-white text-2xl p-1'/>
          </div>
          <img src={props.img} alt="#" className='border border-transparent rounded h-40 w-3/4 object-contain mx-7 mb-7' />
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
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
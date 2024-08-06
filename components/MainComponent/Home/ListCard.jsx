import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoStarSharp} from "react-icons/io5";


const ListCard = (props) => {
  return (
    <div>
      <div className='rounded text-sm text-serif font-semibold '>
        <div className='w-full'> 
          <div className='border border-black/10 rounded flex sm:flex-row flex-col justify-between pt-4 mt-8'>
          <div className='flex flex-row'>
          <img src={props.img} alt="#" className='w-40 h-40 object-contain mx-7 mb-2 pb-8' />
          <div className='w-3/4'>
            <h3 className='py-2'>
              <a href="#" className=''>{props.title}</a>
            </h3>
            <div className='flex flex-row'>
            {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.538 1.117l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.571-1.838-.196-1.538-1.117l1.287-3.951a1 1 0 00-.364-1.118L2.316 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                  </svg>
                ))}
                   <span className='text-brandGrey ml-2'>({props.stars})</span>
            </div>
            <p className='text-brandGrey font-normal text-md'>{props.desc}</p>
            </div>
            </div>
            <div className='flex sm:flex-col justify-between sm:mr-6 sm:mt-2 sm:ml-10 p-4 sm:p-0'> 
            <div>
            <p className=''>{props.newPrice} <span className='font-normal text-gray-300'><strike>{props.oldPrice}</strike> </span> </p>     
            <span className='text-green-400 py-2'>Free shipping</span>
            </div>
            <div className='flex gap-2 '>
            <button className='bg-brandOrange text-white text-nowrap px-8 py-2 rounded'>Buy now</button>
            <IoHeartOutline className='text-xl mt-2.5 sm:mt-1.5'/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListCard
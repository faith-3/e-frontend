import React from 'react'
import data from '../Cart/Data'
import MonthCard from './MonthCard'
import img1 from '../../../assets/images/image2.jpg'
import img2 from '../../../assets/images/image3.jpg'
import img3 from '../../../assets/images/image4.jpg'
import img4 from '../../../assets/images/image5.jpg'
import img5 from '../../../assets/images/image.jpg'
import { IoEyeOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";



const productData=[
    {
      id:1,
      btn:'-20%',
      img:img1,
      title:"Confy chair",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room,",
      price:'$46',
      stars: '4.8'
    },
    {
      id:1,
      btn:'-14%',
      img:img2,
      title:"showers",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '5.2'
    },
    {
      id:1,
      btn:'-75%',
      img:img3,
      title:"water tapes",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '5.8'
    },
    {
      id:1,
      btn:'-67%',
      img:img4,
      title:"china tiles",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '5.8'
    },
  ];


const BestSeller = () => {
  return (
    <div className='flex flex-col justify-center border-b-2 border-gray-300'>
        <div className='border rounded w-6 py-3 bg-brandOrange'>
            <h1 className='text-brandOrange font-bold sm:font-semibold text-nowrap px-12'>Best Seller</h1>
        </div>
        <div className='flex flex-row justify-between mb-8'>
            <h1 className='text-xl font-semibold sm:font-normal'>Popular Items</h1>
            <div>
                <button className='border rounded border-red-400 bg-brandOrange text-white hover:bg-red-600 focus:outline-none focus:bg-red-400 py-2 px-4'>View All</button>
            </div>
        </div>

        <div>
            <div>
            </div>
            <div className=''>
            <ul className='flex gap-3'>
          {productData.map((data, index) => (
            <li key={index} className=''>            
 <div className='pb-10 rounded text-sm text-serif font-semibold'>
        <div className='w-72'> 
          <div className='bg-gray-100 rounded'>
          <div className='flex flex-col items-end pr-3 gap-3 mt-4 pt-4'>
          <IoEyeOutline className='border border-white rounded-full shadow-lg bg-white text-2xl p-1'/>
          <IoHeartOutline className='border border-white rounded-full shadow-lg bg-white text-2xl p-1'/>
          </div>
          <img src={data.img} alt="#" className='border border-transparent rounded h-40 w-3/4 object-contain mx-7 mb-7' />
          <button className='border rounded-b border-black text-sm bg-black hover:bg-gray-300 hover:border-gray-300 hover:text-black focus:bg-red-400 focus:border-red-400 focus:text-black text-white py-2 w-full'>Add to cart</button>
          </div>
          <div className='py-4'>
            {/* card title */}
            <h3 className='py-2 flex flex-row justify-between'>
              <a href="#">{data.title}</a>
              <p className='pb-2 text-red-400'>{data.price}</p>
            </h3>
            {/* card description */}
            <p className='text-brandGrey'>{data.desc}</p>
            {/* card price */}
            
            <div className='flex flex-row gap-1'>
            {[...Array(1)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.538 1.117l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.571-1.838-.196-1.538-1.117l1.287-3.951a1 1 0 00-.364-1.118L2.316 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                  </svg>
                ))}
                <span>{data.stars}</span>
            </div>
            </div>
        </div>
      </div>
            </li>
          ))}
        </ul>
            </div>
        </div>
    </div>
  )
}

export default BestSeller
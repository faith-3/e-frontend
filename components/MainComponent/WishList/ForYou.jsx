import React from 'react'
import data from '../Cart/Data'
import ForYouCard from './ForYouCard'
import ForYouData from './ForYouData'
import { IoEyeOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import img1 from '../../../assets/images/image.jpg'
import img2 from '../../../assets/images/image.jpg'
import img3 from '../../../assets/images/image.jpg'
import img4 from '../../../assets/images/image.jpg'
import img5 from '../../../assets/images/image.jpg'
import img6 from '../../../assets/images/image.jpg'


const productData=[
    {
      id:1,
      btn:'-20%',
      img:img1,
      title:"Confy chair",
      price:'$46',
      stars: '65',
    },
    {
      id:1,
      btn:'-14%',
      img:img2,
      title:"showers",
      price:'$46',
      stars: '65',
    },
    {
      id:1,
      btn:'-75%',
      img:img3,
      title:"water tapes",
      price:'$46',
      stars: '65',
    },
    {
      id:1,
      btn:'-67%',
      img:img4,
      title:"china tiles",
      price:'$46',
      stars: '65',
    },
    {
      id:1,
      btn:'-20%',
      img:img5,
      title:"White wine",
      price:'$46',
      stars: '65',
    },
    {
      id:1,
      btn:'-13%',
      img:img5,
      title:"White wine",
      price:'$46',
      stars: '65',
    },
    {
      id:1,
      btn:'-50%',
      img:img3,
      title:"White wine",
      price:'$46',
      stars: '65',
    },
    {
      id:1,
      btn:'-43%',
      img:img4,
      title:"White wine",
      price:'$46',
      stars: '65',
    },
  ];

const ForYou = () => {
  return (
    <div className='flex flex-col justify-center mt-20'>
        <div className='border rounded w-6 py-3 bg-brandOrange'>
            <h1 className='text-brandOrange font-semibold px-12'>JustforYou</h1>
        </div>
        <div className='flex flex-row justify-end mb-8'>
                <button className='border rounded border-gray-400 py-2 px-6'>See All</button>
        </div>

        <div>
            <div>
            </div>
            <div className='flex flex-row gap-12 overflow-y-auto scroll-smooth'>
            <ul className='flex flex-row gap-3 overflow-x-auto'>
          {productData.map((data, index) => (
            <li key={index}>            
            <div className='pb-10 rounded text-sm text-serif font-semibold'>
        <div className='w-80'> 
          <div className='bg-gray-100 rounded'>
          <div className='flex justify-between p-4'>
            <button className='bg-brandOrange text-white px-4 py-2 rounded'>{data.btn}</button>
          <IoEyeOutline className='border border-white rounded-full shadow-lg bg-white text-2xl p-1'/>
          </div>
          <img src={data.img} alt="#" className='border border-transparent rounded h-full w-3/4 mx-7 pb-8 object-contain' />
          </div>
          <div className='py-4'>
            {/* card title */}
            <h3 className='py-2'>
              <a href="#">{data.title}</a>
            </h3>
            {/* card description */}
            <p>{data.desc}</p>
            {/* card price */}
            <p className='pb-2 text-brandOrange'>{data.price}</p>
            <div className='flex flex-row gap-1'>
            {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.538 1.117l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.571-1.838-.196-1.538-1.117l1.287-3.951a1 1 0 00-.364-1.118L2.316 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                  </svg>
                ))}
                <span className='text-brandGrey'>({data.stars})</span>
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

export default ForYou
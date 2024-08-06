import React from 'react'
import data from '../Cart/Data'
import ProductCard from '../Home/ProductCard'
import img1 from '../../../assets/images/image2.jpg'
import img2 from '../../../assets/images/image3.jpg'
import img3 from '../../../assets/images/image4.jpg'
import img4 from '../../../assets/images/image5.jpg'
import img5 from '../../../assets/images/image.jpg'
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
    {
      id:1,
      btn:'-20%',
      img:img5,
      title:"White wine",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-13%',
      img:img5,
      title:"White wine",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-50%',
      img:img3,
      title:"White wine",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-43%',
      img:img4,
      title:"White wine",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-20%',
      img:img1,
      title:"Confy chair",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-14%',
      img:img2,
      title:"showers",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-75%',
      img:img3,
      title:"water tapes",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-67%',
      img:img4,
      title:"china tiles",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-20%',
      img:img5,
      title:"White wine",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-13%',
      img:img5,
      title:"White wine",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-50%',
      img:img3,
      title:"White wine",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-43%',
      img:img4,
      title:"White wine",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-20%',
      img:img1,
      title:"Confy chair",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-14%',
      img:img2,
      title:"showers",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-75%',
      img:img3,
      title:"water tapes",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-67%',
      img:img4,
      title:"china tiles",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-20%',
      img:img5,
      title:"White wine",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-13%',
      img:img5,
      title:"White wine",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-50%',
      img:img3,
      title:"White wine",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-43%',
      img:img4,
      title:"White wine",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-20%',
      img:img1,
      title:"Confy chair",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-14%',
      img:img2,
      title:"showers",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-75%',
      img:img3,
      title:"water tapes",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-67%',
      img:img4,
      title:"china tiles",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-20%',
      img:img5,
      title:"White wine",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-13%',
      img:img5,
      title:"White wine",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-50%',
      img:img3,
      title:"White wine",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
    {
      id:1,
      btn:'-43%',
      img:img4,
      title:"White wine",
      desc: "Ceiling - D60*H22 cm, Light source - E14*10, Space - Living room, Area -...",
      price:'$46',
      stars: '3'
    },
  ];

const Products = () => {
  return (
    <div className='flex flex-col justify-center md:mr-10  border-gray-300'>
        <div className='border rounded w-6 py-3 bg-red-500'>
            <h1 className='text-red-500 px-12 w-100 font-semibold'>RelatedItems</h1>
        </div>

        <div>
            <div>
            </div>
            {/* div */}
            <div className='flex flex-row overflow-y-auto gap-6'>
            <ul className='flex flex-row gap-3 overflow-x-auto'>
          {productData.map((data, index) => (
            <li key={index}>            
            <div className='pb-10 rounded text-sm text-serif font-semibold'>
        <div className='w-64'> 
          <div className='bg-gray-100 rounded'>
          <div className='flex justify-between px-4 py-4'>
            <button className='bg-brandOrange text-white px-4 py-2 rounded'>{data.btn}</button>
          <IoHeartOutline className='border border-white rounded-full shadow-lg bg-white text-2xl p-1'/>
          </div>
          <img src={data.img} alt="#" className='border border-transparent rounded h-40 w-3/4 object-contain mx-7 mb-2 pb-8' />
          </div>
          <div className=''>
            <div className='flex justify-between'>
            <h3 className='py-2'>
              <a href="#">{data.title}</a>
            </h3>
            <p className='pb-2 text-brandOrange'>{data.price}</p>
            </div>
            <p className='text-brandGrey'>{data.desc}</p>
            <div className='flex flex-row gap-1'>
            {[...Array(1)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.538 1.117l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.571-1.838-.196-1.538-1.117l1.287-3.951a1 1 0 00-.364-1.118L2.316 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                  </svg> 
                  // comment
                ))}
                <span className='text-brandGrey '>({data.stars})</span>
            </div>
            </div>
        </div>
      </div>
            </li>
          ))}
        </ul>
            </div>
        <div className='flex flex-row justify-center mb-6'>
            <button className='bg-brandOrange text-white px-10 py-2 rounded'>View All Products</button>
        </div>
        </div>
    </div>
  )
}

export default Products
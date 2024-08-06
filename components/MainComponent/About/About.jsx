import React from 'react'
import image from '../../../assets/images/image.png'
import { AiOutlineDollar } from "react-icons/ai";
import { FaSackDollar } from "react-icons/fa6";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { IoGiftOutline } from "react-icons/io5";
import ceo from '../../../assets/images/ceo.png'
import malexia from '../../../assets/images/malexia.png'
import tothehit from '../../../assets/images/tothehit.jpg'
import serge from '../../../assets/images/serge.png'
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { RiLinkedinLine } from "react-icons/ri";
import Prefooter from '../Prefooter/Prefooter';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import NavAfter from '../../Navbar/Nav';



const AboutStats = [
    {
        id:1,
        icon:<HiOutlineHomeModern />,
        category:'10.5k',
        desc:"Active sellers",
    },
    {
        id:2,
        icon:<AiOutlineDollar />,
        category:'33k',
        desc:"Monthly Product Sale",
    },
    {
        id:3,
        icon:<IoGiftOutline />,
        category:'45.5k',
        desc:"Customers active",
    },
    {
        id:4,
        icon:<FaSackDollar />,
        category:'25k',
        desc:"Annual gross sale",
    },
]

const About = () => {
  return (
    <div className='container'>
      <NavAfter/>
<div className="bg-white text-gray-900 font-sans leading-normal tracking-normal">
  </div>
  <div className='text-gray-600'><span className='font-light'>Home /</span> About us</div>
        <h1 className='font-semibold text-center sm:text-start sm:text-4xl'>Our Story</h1>
        <div className='flex lg:flex-row-reverse flex-col justify-between sm:gap-20'>
        <div className='lg:w-1/2 mt-4  sm:my-10'>
        <img src={image} alt="" className='' />
        </div>
            <div className='lg:w-1/2 text-xs text-center mt-4 sm:text-lg lg:mt-8 font-semibold text-brandGreyy'>
                <p className='sm:font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo neque doloribus inventore. Odit repellendus, atque ullam hic quidem reprehenderit iusto tempora, ex ipsam nam dignissimos repudiandae, ducimus reiciendis itaque cum!</p><br />
                <p className='sm:font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos esse cum laborum dolorum molestias excepturi quis optio omnis placeat rem, repudiandae reiciendis odit sed ut ipsa, eveniet, dignissimos hic?</p>
                <p className='sm:font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo neque doloribus inventore. Odit repellendus, atque ullam hic quidem reprehenderit iusto tempora, ex ipsam nam dignissimos repudiandae, ducimus reiciendis itaque cum!</p><br />
                <p className='sm:font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos esse cum laborum dolorum molestias excepturi quis optio omnis placeat rem, repudiandae reiciendis odit sed ut ipsa, eveniet, dignissimos hic?</p>
            </div>
        </div>
        <div className='sm:mt-40 sm:mb-40'>
        <div className='flex flex-row'>
            <div className='grid grid-cols-2 sm:flex lg:flex-row gap-4 sm:gap-10 items-center justify-center w-full mt-10'>
            {AboutStats.map((data, index) => (
            data.id === 2? ( 
              <h1 key={index} className='border flex flex-col items-center text-xl justify-center w-full md:w-3/4 sm:h-80 px-4 sm:text-3xl font-semibold bg-red-500 text-white rounded py-2'>
                <span className='bg-white text-black border-8 border-gray-300 rounded-full sm:w-20 sm:h-20 flex flex-row justify-center items-center text-xl p-2 sm:text-5xl mb-4'>
                {data.icon}
                </span>
                {data.category}
                <p className='sm:text-sm text-xs text-center'>{data.desc}</p>
              </h1>
            ) : (
              <h1 key={index} className='border border-brandGrey flex flex-col items-center justify-center w-full md:w-3/4 sm:h-80 px-4 sm:text-3xl text-xl font-semibold rounded py-2'>
                <span className='bg-black text-white border-8 border-gray-300 rounded-full sm:w-20 sm:h-20 flex flex-row justify-center items-center text-xl p-2 sm:text-5xl mb-8'>{data.icon}</span>
                {data.category}
                <p className=' sm:text-sm text-xs text-center'>{data.desc}</p>
              </h1>
            )
          ))}
            </div>
        </div>
        </div>
    
        <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper py-10"
            >
        <SwiperSlide>
          <img src={malexia} alt="" className=''/>
          <div className='mt-4 text-center'>
          <h1 className='sm:text-2xl font-semibold'>Emma Watson</h1>
          <p className='text-xs sm:font-semibold mb-2'>Managing director</p>
          <div className='flex space-x-3 justify-center'>
            <RiTwitterXLine/>
            <IoLogoInstagram/>
            <RiLinkedinLine/>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ceo} alt="" />
          <div className='mt-4 text-center'>
          <h1 className='sm:text-2xl font-semibold'>Tom Cruise</h1>
          <p className='text-xs sm:font-semibold mb-2'>CEO & founder</p>
          <div className='flex space-x-3 justify-center'>
            <RiTwitterXLine/>
            <IoLogoInstagram/>
            <RiLinkedinLine/>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={serge} alt="" />
          <div className='mt-4 text-center'>
          <h1 className='sm:text-2xl font-semibold'>Will Smith</h1>
          <p className='text-xs sm:font-semibold mb-2'>Product Designer</p>
          <div className='flex space-x-3 justify-center'>
            <RiTwitterXLine/>
            <IoLogoInstagram/>
            <RiLinkedinLine/>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={malexia} alt="" />
          <div className='mt-4 text-center'>
          <h1 className='sm:text-2xl font-semibold'>Emma Watson</h1>
          <p className='text-xs sm:font-semibold mb-2'>Managing director</p>
          <div className='flex space-x-3 justify-center'>
            <RiTwitterXLine/>
            <IoLogoInstagram/>
            <RiLinkedinLine/>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={malexia} alt="" />
          <div className='mt-4 text-center'>
          <h1 className='sm:text-2xl font-semibold'>Emma Watson</h1>
          <p className='text-xs sm:font-semibold mb-2'>Managing director</p>
          <div className='flex space-x-3 justify-center'>
            <RiTwitterXLine/>
            <IoLogoInstagram/>
            <RiLinkedinLine/>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={malexia} alt="" />
          <div className='mt-4 text-center'>
          <h1 className='sm:text-2xl font-semibold'>Emma Watson</h1>
          <p className='text-xs sm:font-semibold mb-2'>Managing director</p>
          <div className='flex space-x-3 justify-center'>
            <RiTwitterXLine/>
            <IoLogoInstagram/>
            <RiLinkedinLine/>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={malexia} alt="" />
          <div className='mt-4 text-center'>
          <h1 className='sm:text-2xl font-semibold'>Emma Watson</h1>
          <p className='text-xs sm:font-semibold mb-2'>Managing director</p>
          <div className='flex space-x-3 justify-center'>
            <RiTwitterXLine/>
            <IoLogoInstagram/>
            <RiLinkedinLine/>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
        <Prefooter/>
    </div>
  )
}

export default About
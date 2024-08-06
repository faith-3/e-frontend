import React from 'react';
import vector from '../../assets/images/Vector.png'
import { getProducts } from './datafolder/Product';
import {getImageURL} from '../../Utils/image-util';
import image from '../../assets/images/backdrop.png'
import image2 from '../../assets/images/backdrop2.png'
import girl from '../../assets/images/girl.png'
import support1 from '../../assets/images/support1.png'
import support2 from '../../assets/images/support2.png'
import support3 from '../../assets/images/support3.png'
import support4 from '../../assets/images/support4.png'
import support5 from '../../assets/images/support5.png'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import star from '../../assets/images/star.png'
import Footer from '../MainComponent/Footer/Footer';
import Card from '../../components/MainComponent/Home/Card';
import data from '../../components/MainComponent/Cart/Data';
import DeliveryTruck from '../../assets/images/icon-delivery.png'
import Headphones  from '../../assets/images/customerservice.png';
import VerifiedUser from '../../assets/images/Icon-secure.png'
import Categories from '../MainComponent/Home/Categories';
import Slider from '../../Slider'

const Today = () => {
    return(
    <div className='mt-20 mb-10'>
      <h1 className='border rounded w-6 py-3 bg-brandOrange'><span className='ml-10 font-bold sm:font-semibold text-brandOrange'>Latest</span></h1>
        <div className='sm:mt-10 flex flex-row justify-between font-semibold'>
        <h1 className='text-xl font-semibold sm:font-normal md:text-xl'>Flash Sales</h1>
          <div className='hidden sm:flex flex-row gap-6'>
          {/* Timer components */}
          <div>
            <p className='text-xs font-semibold text-serif'>Days</p>
            <h1 className='text-xl md:text-2xl'>03 <span className='text-brandOrange ml-1'> : </span></h1>
          </div>
          <div>
            <p className='text-xs font-semibold text-serif'>Hours</p>
            <h1 className='text-xl md:text-2xl'>22 <span className='text-brandOrange ml-2'> : </span></h1>
          </div>
          <div>
            <p className='text-xs font-semibold text-serif'>Minutes</p>
            <h1 className='text-xl md:text-2xl'>16 <span className='text-brandOrange ml-3'> : </span></h1>
          </div>
          <div>
            <p className='text-xs font-semibold text-serif'>Seconds</p>
            <h1 className='text-xl md:text-2xl'>48</h1>
          </div>
        </div>
        <div className='flex flex-row space-x-4'>
        <div className='rounded-full bg-secondary text-black active:text-gray-600 w-10 h-10'>
          <FaArrowLeft className='m-3'/>
        </div>
        <div className='rounded-full bg-secondary text-black w-10 h-10'>
          <FaArrowRight className='m-3'/>
        </div>
        </div>
        </div>
        <div className='flex flex-row gap-4 sm:gap-12 overflow-x-auto scroll-smooth mt-4'>
          {data.productData.map((item, index) => (
            <Card btn={item.btn} img={item.img} title={item.title} price={item.price} key={index} />
          ))}
        </div>
    </div>
    )
}

const Benefits = () => {
  return (
    <div className='sm:mt-10 sm:mb-10 space-y-6'>
        <h1 className='space-x-4'>        
            <span className='px-3 py-4 rounded  bg-brandOrange'></span> <span className='text-brandOrange font-medium'>Benefits</span>      
        </h1>
        <h1 className='text-xl font-semibold sm:font-normal md:text-xl'>Exclusive Benefits from All in Rwanda</h1>
        <div className='flex flex-col items-center lg:items-start lg:flex-row gap-10 lg:gap-40 mb-40'>
            <div className='flex flex-col items-center lg:items-start'>
                <div className='rounded-full w-14 shadow-lg shadow-gray-400 p-3'>
                <img src={DeliveryTruck} className='text-brandOrange font-extrabold p-0 text-3xl'/>
                </div>
                <h1 className='font-bold text-sm mt-4'>FREE AND FAST DELIVERY</h1>
                <p className='text-xs font-semibold'>Free delivery for all over $140 </p>
            </div>
            <div className='flex flex-col items-center lg:items-start'>
              <div className='rounded-full w-14 shadow-lg shadow-gray-400 p-3'>
              <img src={Headphones} className='text-brandOrange font-extrabold text-3xl'/>
              </div>
            <h1 className='font-bold text-sm mt-4'>24/7 CUSTOMER SERVICES</h1>
                <p className='text-xs font-semibold'>Friendly 24/7 customer support</p>
            </div>
            <div className='flex flex-col items-center lg:items-start'>
              <div className='rounded-full w-14 shadow-lg shadow-gray-400 p-3'>
              <img src={VerifiedUser} className='text-brandOrange font-extrabold text-3xl'/>
              </div>
                <h1 className='font-bold text-sm mt-4'>SAFE AND SECURE PAYMENTS</h1>
                <p className='text-xs font-semibold'>Payment is safe and track is easy</p>
            </div>
        </div>
    </div>
  )
}

const BestSeller = () => {
  return(
    <div className='mt-20 mb-20 space-y-6'>
        <h1 className='space-x-4'>        
            <span className='px-3 py-4 rounded  bg-brandOrange'></span> <span className='text-brandOrange font-medium'>Best Seller</span>      
        </h1>
      <div className='flex flex-row justify-between'>
      <h1 className='text-xl font-semibold sm:font-normal md:text-xl'>Our Best Seller Products</h1>
      <span>
      <button className='sm:bg-brandOrange sm:text-white text-nowrap sm:px-8 sm:py-2 pt-8 rounded'>View All</button>
      <hr className='bg-brandGrey'/>
      </span>
      </div>
      <div className='flex flex-row overflow-x-auto space-x-20'>
        <BestCard />
      </div>
    </div>
  )
}

const BestCard = () => {
  const products = getProducts();
  return (
    <div>
          <ul className='flex flex-row space-x-4 sm:space-x-14 mt-8'>
              {products.map((product) => (
                <>
                <div>
                <li key={product.id} className='w-64 rounded pt-4 pb-8 pr-4 pl-14 bg-gray-200'>
                <div className='flex flex-row justify-end'>
                  <IoHeartOutline className='border border-white rounded-full shadow-lg shadow-gray-400 bg-white text-2xl p-1 '/>
                </div>
                  <img src={getImageURL(product.cover)}alt='' className='rounded h-40 w-3/4 object-contain'/>
                </li>
                <div className='mt-4 space-y-1'>
                  <div className='flex justify-between'>
                 <p className='font-bold text-xs'>{product.title}</p>
                 <p className='flex space-x-1'>< img src={star} className='w-3 object-contain'/><span className='text-xs font-semibold text-gray-400'>{product.rating.rate}</span> </p>
                 </div>
                 <p className='text-brandOrange font-bold text-xs'>{product.price}</p>
                 </div>
                 </div>
                </>
              ))}
            </ul>
    </div>        
  )
}


const Subscribe = () => {
  return (
    <div className='mt-10  space-y-4'>
    <h1 className='space-x-4'>        
    <span className='px-3 py-4 rounded  bg-brandOrange'></span> <span className='text-brandOrange font-medium'>Subscribe</span>      
</h1>
<h1 className='text-xl font-semibold sm:font-normal md:text-xl'>Subscribe to our website</h1>
    <div className='flex relative font-sans'>
      <img src={image} alt="" className='block sm:hidden w-full relative'/>
      <img src={image2} alt="" className='hidden sm:block'/>
      <div className='absolute text-white m-6 space-y-4'>
        <h1>Subscribe to our website to be notified when products arrive</h1>
        <input type="email" placeholder='Enter your email address' className='bg-transparent w-full placeholder:text-white placeholder:font-sans border border-white rounded px-4 py-2'/><br />
        <div className='flex flex-row justify-end'>
        <button className='bg-white border border-white rounded text-brandOrange px-6 py-2'>Subscribe</button>
        </div>
      </div>
    </div>
    </div>
  )
}






const LandingPage = () => {
  return (
    <div>
  <div className="container bg-white text-gray-900 font-sans leading-normal tracking-normal">
  <nav className="fixed sm:relative z-30 bg-white left-0 top-0 bottom-0 w-full sm:h-full h-100 sm:mb-0 mb-32 shadow-brandGrey shadow-sm sm:shadow-none rounded-b-2xl">
  <div className="w-full relative flex justify-center items-center">
  <img src={vector} alt="Vector" className="hidden xl:block absolute -right-32 -top-4 w-1/2" />
  </div>
  <div className="flex md:flex-row flex-col md:justify-between md:items-center relative py-6 px-2 z-30">
  <div className="sm:w-1/4 text-black font-semibold text-xl md:text-lg lg:text-2xl">All in Rwanda</div>
  <div className='fixed right-8 top-6 z-30'>
    <HiOutlineBars3 className='sm:hidden'/>
  </div>
  <div className="sm:w-3/4 flex md:flex-row flex-col gap-10 sm:mt-0 md:mt-2 mt-20 sm:justify-end md:text-sm lg:text-lg">
  <a href="#home" className=" text-black sm:ml-0 ml-4">Home</a>
  <a href="#contact" className=" text-black sm:ml-0 ml-4">Contact</a>
  <a href="#about" className=" sm:text-black sm:ml-0 ml-4">About</a>
  <a href="#signup" className=" 2xl:text-white text-nowrap sm:ml-0 ml-4">Sign Up</a>
  <div className='flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0 lg:ml-24 font-medium md:-mt-2'>
  <button href="#login" className="text-white bg-brandOrange border rounded md:rounded-full py-2 px-6 ">Login</button>
  <button className="bg-white border rounded md:rounded-full text-brandOrange py-2 px-6">Register</button>
  </div>
  </div>
  </div>
  </nav>
  <div className="flex flex-col xl:flex-row items-center sm:my-12">
  <div className="flex flex-col w-full xl:w-1/2 items-center ">
  <h1 className="text-3xl md:text-5xl font-bold leading-tight">Unite your <span className='text-brandOrange'>Shopping:  <br className='hidden md:block'/>  </span>Diverse Products from<span className='px-2 ml-4 rounded bg-red-500'></span> <span className="text-brandOrange">Trusted</span> Companies</h1>
  <p className="text-sm text-center sm:text-start md:text-lg text-black mt-4 sm:mb-8">
  Our platform ensures a safe and secure shopping experience with 100% buyer protection.
  </p>
  <p className="text-sm text-center sm:text-start md:text-lg text-black mt-4 mb-8">Lorem ipsum dolor sit amet consectetur. Metus ultrices praesent diam amet. Felis est faucibus vulputate at augue. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore ad suscipit quos quod consequuntur voluptas nemo. Commodi veniam at ipsa voluptatibus aliquid suscipit! Officia quos asperiores illo porro aperiam?</p>
  <button className="bg-brandOrange text-white py-2 px-10 rounded shadow-lg shadow-gray-400">Start Now</button>
  </div>
  <div className="w-full xl:w-2/3">
  <img src={girl} alt="Shopping" className="xl:relative z-30 left-32 top-36" />
  </div>
  </div>
  <div className="container space-x-2 sm:space-x-10 sm:mt-40">
  <h1 className='text-gray-300 text-center text-xs  font-semibold sm:py-6 pt-6 '>Support by:</h1>
  <img src={support1} alt="Grab" className="inline-block h-4 lg:h-10 lg:pr-10 md:pl-10" />
  <img src={support2} alt="Grab" className="inline-block h-4 lg:h-10 lg:px-16" />
  <img src={support3} alt="Dana" className="inline-block h-4 lg:h-10 lg:px-16" />
  <img src={support4} alt="Shopee" className="inline-block h-4 lg:h-10 lg:px-16" />
  <img src={support5} alt="Zomato" className="inline-block h-16 lg:h-20 lg:px-16" />

  </div>
  <Today />
  <Benefits />
  <BestSeller/>
  <Categories />
  <Slider />
  <Subscribe />
  </div>
   <Footer/>
</div>
  );
  };
  
  export default LandingPage;
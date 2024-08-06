import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image from '../../../assets/images/home.png';
import image1 from '../../../assets/images/pixel.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay} from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          pauseOnMouseEnter:true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex">
              <div className='absolute m-6 sm:ml-14 sm:my-20'>
                <h1 className='text-white sm:text-black text-3xl'>Bonus offer</h1>
                <div className='text-white font-semibold text-3xl mt-8'>
                  <p><span className='text-4xl'>30%</span> off Google Pixel</p>
                  <p>Products only this Monday</p>
                </div>
                <button className='mt-8 bg-brandOrange text-white px-6 py-2 rounded'>Buy now</button>
              </div>
              <img src={image} alt="" className='hidden sm:block sm:w-3/4' />
              <img src={image1} alt="" className='block sm:hidden w-full' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

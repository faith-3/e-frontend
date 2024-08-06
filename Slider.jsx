import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonialSlider.css';
import image from './assets/images/image5.jpg';
import { space } from 'postcss/lib/list';

const testimonials = [
  {image:image, region:'USA', name: 'John Doe', text: 'Lorem ipsum dolor sit amet consectetur. Metus ultrices praesent diam amet. Felis est faucibus vulputate at augue. Felis elit aliquet gravida est sit. Auctor quis viverra magna quam. Eget fusce feugiat scelerisque sit quis sed nunc eu. Convallis quam rhoncus lectus tristique elit at massa. Ullamcorper ullamcorper feugiat aliquet proin sed libero nunc tellus.' },
  {image:image, region:'USA', name: 'Jane Smith', text: 'Lorem ipsum dolor sit amet consectetur. Metus ultrices praesent diam amet. Felis est faucibus vulputate at augue. Felis elit aliquet gravida est sit. Auctor quis viverra magna quam. Eget fusce feugiat scelerisque sit quis sed nunc eu. Convallis quam rhoncus lectus tristique elit at massa. Ullamcorper ullamcorper feugiat aliquet proin sed libero nunc tellus..' },
  {image:image, region:'USA', name: 'Jim Brown', text: 'Highly recommend to everyone!Lorem ipsum dolor sit amet consectetur. Metus ultrices praesent diam amet. Felis est faucibus vulputate at augue. Felis elit aliquet gravida est sit. Auctor quis viverra magna quam. Eget fusce feugiat scelerisque sit quis sed nunc eu. Convallis quam rhoncus lectus tristique elit at massa. Ullamcorper ullamcorper feugiat aliquet proin sed libero nunc tellus.' },
  {image:image, region:'USA', name: 'Jake White', text: 'Five stars, exceptional quality!Lorem ipsum dolor sit amet consectetur. Metus ultrices praesent diam amet. Felis est faucibus vulputate at augue. Felis elit aliquet gravida est sit. Auctor quis viverra magna quam. Eget fusce feugiat scelerisque sit quis sed nunc eu. Convallis quam rhoncus lectus tristique elit at massa. Ullamcorper ullamcorper feugiat aliquet proin sed libero nunc tellus.' },
];

const TestimonialSlider = () => {
  const settings = {
    centerMode: true,
    slidesToShow: 3,
    dots: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: '30px',
        },
      },
    ],
  };

  return (
    <div className='mt-20 sm:mt-40 container'>
      <div className='text-brandOrange font-semibold flex justify-center space-x-2'>
      <hr className='bg-brandOrange w-6 h-1 rounded mt-2'/>
      <h1 className='text-sm '>Testimonials</h1>
      </div>
    <div className="">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card border border-black/15">
           <div className='flex flex-rowrounded'>
            <img src={testimonial.image} alt=""  className='w-12 object-contain rounded-full'/>
            <div className='px-4'>
            <h1 className='font-semibold text-sm'>{testimonial.name}</h1>
            <p className='text-black/20 text-sm'>{testimonial.region}</p>
            </div>
           </div>
           <p className='text-xs'>{testimonial.text}</p>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default TestimonialSlider;

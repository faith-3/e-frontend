import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import image from '../../../assets/images/home.png';
import image1 from '../../../assets/images/image5.jpg'
import TopSlider from './TopSlider';

const Links = [
  { id: 1, name: "China tiles", link: "/#", options: ['Option A', 'Option B', 'Option C'] },
  { id: 2, name: "Full body tiles", link: "/#", options: ['Option A', 'Option B', 'Option C'] },
  { id: 3, name: "Luxury Lights", link: "/#", options: ['Option A', 'Option B', 'Option C'] },
  { id: 4, name: "Furniture", link: "/#", options: ['Option A', 'Option B', 'Option C'] },
  { id: 5, name: "Wall tiles", link: "/#", options: ['Option A', 'Option B', 'Option C'] },
  { id: 6, name: "Wooden tiles", link: "/#", options: ['Option A', 'Option B', 'Option C'] },
  { id: 7, name: "Floor tiles", link: "/#", options: ['Option A', 'Option B', 'Option C'] },
  { id: 8, name: "External tiles", link: "/#", options: ['Option A', 'Option B', 'Option C'] },
  { id: 9, name: "Wall tiles", link: "/#", options: ['Option A', 'Option B', 'Option C'] }
];

const Top = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleToggle = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className='flex border-b-2 mb-10'>
      {/* Slideable menu swiper js for responsiveness */}
      <ul className='hidden sm:flex md:flex-col gap-4 overflow-x-auto md:w-1/4 border-r-2 mr-20'>
        {Links.map((data, index) => (
          <li key={index} className='flex flex-col text-nowrap'>
            <div>
              <button 
                onClick={() => handleToggle(index)}
                className='flex items-center'
              >
                {data.name}
                <span className='ml-2'>
                  {isOpen === index ? <ChevronUpIcon className='h-5 w-5' /> : <ChevronDownIcon className='h-5 w-5' />}
                </span>
              </button>
              {isOpen === index && (
                <div className='flex flex-col mt-2'>
                  {data.options.map((option, idx) => (
                    <div key={idx} className='mt-1 ml-4 text-brandGrey'>
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className='w-full sm:w-3/4 mb-4'>
        <TopSlider />
      </div>
    </div>
  );
};

export default Top;

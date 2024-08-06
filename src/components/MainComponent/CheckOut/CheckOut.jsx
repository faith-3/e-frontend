import { useState } from 'react'
import image1 from '../../../assets/images/image1.webp';
import image2 from '../../../assets/images/image2.jpg';
import bkash from '../../../assets/images/bkash.jpg'
import visa from '../../../assets/images/visa.jpg'
import mastercard from '../../../assets/images/mastercard.png'
import paypal from '../../../assets/images/paypal.jpg'
import { Checkbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import NavAfter from '../../Navbar/Nav';

const Items = [
  {
    image: image1,
    name: "china tiles",
    price: "$234"
  },
  {
    image: image2,
    name: "furniture",
    price: "$540"
  },
];


const CheckOut = () => {
  const [enabled, setEnabled] = useState(true)
  return (
    <div className='container'>
      <NavAfter/>
    <div className="flex flex-col md:flex-row justify-between w-100">
      <div className="w-full md:w-1/4">
        <h1 className="text-lg md:text-2xl my-4">Billing details</h1>
        <div>
          <form action="" className="flex flex-col">
          <label className="block">
    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-400 text-xs md:text-sm">
   First Name 
    </span>
    <input type="text" name="fname" className="mt-1 selection:bg-brandGrey border-gray-100 bg-gray-100 mb-4 p-2 selection:text-whiteshadow-sm border-2 focus:border placeholder-slate-400 focus:outline-none focus:border-brandOrange focus:ring-brandOrange block w-full rounded-md sm:text-sm focus:ring-1"/>
    </label>
            <label htmlFor="CompanyName" className="text-gray-400 text-xs md:text-sm">Company Name</label>
            <input type="text" name="company" className="mt-1 selection:bg-brandGrey border-gray-100 bg-gray-100 mb-4 p-2 focus:outline-none selection:text-whiteshadow-sm border-2 block w-full rounded-md sm:text-sm" />
            <label className="block">
    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-400 text-xs md:text-sm">
 Street address
    </span>
    <input type="text" name="pword" className="mt-1 selection:bg-brandGrey border-gray-100 bg-gray-100 mb-4 p-2 selection:text-whiteshadow-sm border-2 focus:border placeholder-slate-400 focus:outline-none focus:border-brandOrange focus:ring-brandOrange block w-full rounded-md sm:text-sm focus:ring-1"/>
    </label>
            <label htmlFor="Apartment" className="text-gray-400 text-xs md:text-sm">Apartment, floor, etc (Optional)</label>
            <input type="text" name="apartment" className="mt-1 selection:bg-brandGrey border-gray-100 bg-gray-100 mb-4 p-2 focus:outline-none selection:text-whiteshadow-sm border-2 block w-full rounded-md sm:text-sm" />
            <label className="block">
    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-400 text-xs md:text-sm">
   City/Town
    </span>
    <input type="text" name="pword" className="mt-1 selection:bg-brandGrey border-gray-100 bg-gray-100 mb-4 p-2 selection:text-whiteshadow-sm border-2 focus:border placeholder-slate-400 focus:outline-none focus:border-brandOrange focus:ring-brandOrange block w-full rounded-md sm:text-sm focus:ring-1"/>
    </label>
    <label className="block">
    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-400 text-xs md:text-sm">
Phone number
    </span>
    <input type="text" name="pword" className="mt-1 selection:bg-brandGrey border-gray-100 bg-gray-100 mb-4 p-2 selection:text-whiteshadow-sm border-2 focus:border placeholder-slate-400 focus:outline-none focus:border-brandOrange focus:ring-brandOrange block w-full rounded-md sm:text-sm focus:ring-1"/>
    </label>
    <label className="block">
    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-400 text-xs md:text-sm">
   Email
    </span>
    <input type="email" name="pword" className="mt-1 selection:bg-brandGrey border-gray-100 bg-gray-100 mb-4 p-2 selection:text-whiteshadow-sm border-2 focus:border placeholder-slate-400 focus:outline-none focus:border-brandOrange focus:ring-brandOrange block w-full rounded-md sm:text-sm focus:ring-1"/>
    </label>
            <div className='flex flex-row gap-2 text-xs'>
            <span className='flex flex-row text-md space-x-2 mt-4'>
        <Checkbox
      checked={enabled}
      onChange={setEnabled}
      className="group size-6 rounded-md bg-white p-1 ring-1 ring-primary data-[checked]:ring-brandOrange ring-inset data-[checked]:bg-brandOrange"
    >
      <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
    </Checkbox> 
    <div className='mb-4 '>
      <p className='font-medium mt-1'>Save this information for faster check-out next time</p>
    </div>
    </span>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className=''>
          {Items.map((data, index) => (
            <>
            <div key={index} className='flex gap-10 flex-row text-xs md:text-sm font-medium'>
              <img src={data.image} alt="Item" className='w-20 object-contain'/>
              <div className='flex flex-row items-center'>
              <h1 className='text-nowrap'>{data.name}</h1>
              <div className='pl-40'>{data.price}</div>
              </div>
            </div>
            </>
          ))}
        </div>
        <div className='mt-20 md:w-1/2 text-xs font-medium '>
          <div className='flex flex-row justify-between border-b border-gray-600 my-4'>
            <p>Subtotal:</p>
            <p>$987</p>
          </div>
          <div className='flex flex-row justify-between border-b border-gray-600 my-4'>
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className='flex flex-row justify-between border-b border-gray-600 my-4'>
            <p>Total:</p>
            <p>$987</p>
          </div>
          <div className='py-4 space-y-4'>
            <div className='flex flex-row justify-between gap-4'>
            <div className='flex flex-row gap-2'>
            <input type="radio" name="" id="1" />
            <h1 className='mt-4 md:mt-3'>Bank</h1>
            </div>
            <div className='flex flex-row gap-2 md:gap-4'>
            <img src={bkash} alt="" className='w-20 object-contain'/>
            <img src={visa} alt="" className='w-10 object-contain'/>
            <img src={mastercard} alt="" className='w-10 object-contain'/>
            <img src={paypal} alt="" className='w-10 object-contain'/>
            </div>
            </div>
            <div className='flex flex-row gap-2'>
            <input type="radio" name="Cash on delivery" id="1" />
            <h1>Cash on delivery</h1>
            </div>
            <div className='flex flex-row gap-2 md:gap-0 md:justify-between'>
                <input type="text" placeholder='Coupon Code' className='border px-4 py-2 rounded'/>
            <button className='border rounded px-4 py-2 bg-red-400 text-white text-nowrap'>Apply Coupon</button>
            </div>
            <button className='border rounded px-4 py-2 bg-red-400 text-white'>Place Order</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CheckOut;

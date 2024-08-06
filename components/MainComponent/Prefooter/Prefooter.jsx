import React from 'react'
import DeliveryTruck from '../../../assets/images/icon-delivery.png'
import Headphones  from '../../../assets/images/customerservice.png';
import VerifiedUser from '../../../assets/images/Icon-secure.png'

const Prefooter = () => {
  return (
    <div className=' mt-10 sm:mt-40 mb-10 space-y-6'>
    <div className='flex flex-col md:flex-row justify-center space-y-10 sm:space-y-0 sm:space-x-40'>
        <div className='flex flex-col items-center'>
            <div className='rounded-full w-14 shadow-xl shadow-gray-600 bg-secondary p-3'>
            <img src={DeliveryTruck} className='text-brandOrange font-extrabold p-0 text-3xl'/>
            </div>
            <h1 className='font-bold text-sm mt-4'>FREE AND FAST DELIVERY</h1>
            <p className='text-xs  font-semibold'>Free delivery for all over $140 </p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='rounded-full w-14 shadow-xl shadow-gray-600 bg-secondary p-3'>
          <img src={Headphones} className='text-brandOrange font-extrabold text-3xl'/>
          </div>
        <h1 className='font-bold text-sm mt-4'>24/7 CUSTOMER SERVICES</h1>
            <p className='text-xs  font-semibold'>Friendly 24/7 customer support</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='rounded-full w-14 shadow-xl shadow-gray-600 bg-secondary p-3'>
          <img src={VerifiedUser} className='text-brandOrange font-extrabold text-3xl'/>
          </div>
            <h1 className='font-bold text-sm mt-4'>SAFE AND SECURE PAYMENTS</h1>
            <p className='text-xs  font-semibold'>Payment is safe and track is easy</p>
        </div>
    </div>
</div>
  )
}

export default Prefooter
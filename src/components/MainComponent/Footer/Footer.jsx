import React from 'react'
import { IoSendOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='bg-black text-white font-light mt-4 select-none'>
        <div className='mt-10 pt-10 pb-20 w-100 text-xs flex flex-col md:flex-row justify-between container gap-10'>
            <div className='md:ml-4 ml-4 xl:text-xl text-lg md:text-xs'>
                <h1 className='text-xl xl:text-2xl md:text-sm font-semibold mb-3'>All in Rwanda</h1>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                {/* <div className='flex flex-row mt-3 bg-gray-700 rounded py-1 px-2'>
                <input type="text" placeholder='Send an email' className='bg-gray-700 w-20 sm:w-20' />
                <IoSendOutline className='mt-1 ml-2 sm:ml-0 text-gray-400' />
                </div> */}
            </div>
            <div className='ml-4 text-xl xl:text-lg md:text-xs'>
                <h1 className='text-xl md:text-sm xl:text-2xl font-semibold sm:font-semibold mb-3 '>Support</h1>
                <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div className='ml-4 text-xl xl:text-lg md:text-xs'>
                <h1 className='text-xl md:text-sm  xl:text-2xl font-semibold mb-3 pr-16 sm:pr-14'>Account</h1>
                <p>My Account</p>
                <p>Login/Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
            </div>
            <div className='ml-4 text-xl xl:text-lg md:text-xs'>
                <h1 className='text-xl xl:text-2xl md:text-sm font-semibold mb-3 pr-10 sm:pr-10'>QuickLink</h1>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
            <div className='ml-4 text-xl  xl:text-lg md:text-xs'>
                <h1 className='text-xl xl:text-2xl md:text-sm font-semibold mb-3'>Download App</h1>
                <p>Save $3 with App New User Only</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
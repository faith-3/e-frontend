import{ useState } from 'react';
import { Link } from 'react-router-dom';
import { IoHeartOutline, IoCartOutline, IoPersonOutline, IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";
import logo from '../../assets/images/logo.png';
import {Profile } from '../MainComponent/Account'
import Search from '../MainComponent/Home/Search'
import { HiOutlineBars3 } from "react-icons/hi2";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const NavAfter = () => {
  
  let [open, setOpen]=useState(false);


  return (
  <div className={`'top-0 left-0 h-full w-full absolute sm:relative sm:bg-white bg-brandOrange z-30 backdrop-blur-sm' `}>
     <div className='fixed right-8 top-6 z-30'>
    <HiOutlineBars3 className=''/>
  </div>
  <nav className="container bg-white pb-20 sm:pb-0">
  <div className="top-0 h-full w-full flex flex-col sm:flex-row gap-20 sm:gap-0 sm:justify-between sm:items-center sm:relative sm:py-4 sm:mb-6">
  <div className="sm:w-1/4 w-full text-black bg-white  text-nowrap font-semibold fixed pt-4 text-xl">
  <h1>All in Rwanda</h1>
  </div>
 <Search/>
  <ul className=''>
  <li className='flex flex-col sm:flex-row gap-10'>
    <h1 className='sm:hidden'>Home</h1>
  <li className='flex flex-row sm:space-x-2'>
    <IoHeartOutline className='mt-1 text-lg hidden sm:block'/>
    <h1>Wishlist</h1>
  </li>
  <li className='flex flex-row sm:space-x-2'>
    <IoCartOutline className='mt-1 hidden sm:block'/>
    <h1>Cart</h1>
  </li>
  <li className='flex flex-row sm:space-x-2'>
    <IoPersonOutline className='mt-1 hidden sm:block'/>
    <div className="">
      <div className="">
        <Disclosure as="div">
          <DisclosureButton className="group flex w-full items-center">
            <span className="">
            Profile
            </span>
            <ChevronDownIcon className="size-5 fill-black absolute right-14 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 ml-8 text-sm/5 text-black">
          <div className='sm:block sm:w-1/4 my-4 sm:my-10 text-brandGrey'>
            <div>
                <h1 className='font-semibold mb-8'>Manage My Account</h1>
                <div className='ml-10 mb-8 text-brandGrey'>
                    <p className='text-brandOrange'>My Profile</p>
                    <p>Address Book</p>
                    <p>My Payment Options</p>
                </div>
            </div>
            <div>
                <h1 className='font-semibold mb-8'>My Orders</h1>
                <div className='ml-10 mb-8 text-brandGrey'>
                    <p>My returns</p>
                    <p>My cancellations</p>
                </div>
            </div>
            <div>
                <h1 className='font-semibold'>My wishlist</h1>
            </div>
         
        </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </li>
  </li>
  </ul>
  </div>
 
  </nav>
    </div>
  )
}

export default NavAfter
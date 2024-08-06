import React from 'react'
import NavAfter from '../Navbar/Nav'
import { FaArrowLeft } from "react-icons/fa";
import Footer from './Footer/Footer';


const Profile = () => {
return(
    <div className='text-nowrap mt-10'> 
    <span className='hidden sm:block'>
    <NavAfter/>
    </span>
        <div>
        <p className='hidden sm:block text-nowrap'>Home / My profile</p>
                <span className='sm:hidden flex space-x-2'>
                  <FaArrowLeft className='text-brandGrey'/>
                  <p className='text-sm font-semibold text-brandGrey'>My profile</p>
                </span>
        <h1 className='mt-6 sm:mt-0 font-semibold text-xl sm:text-lg sm:absolute right-10 top-8'>Welcome!<span className='text-red-500'>Faith</span></h1>
         </div>
        <div className='flex flex-col lg:flex-row gap-4 '>
        <div className='sm:block sm:w-1/4 my-4 sm:my-10'>
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
    </div>
    </div>
);
}


const Account = () => {
  return (
    <div className='w-full'>
        <div className='container flex flex-col sm:flex-row justify-between mt-8 sm:space-x-10'>
        <Profile />
        <div className='border border-gray-100 shadow-lg w-full px-10 py-6 mt-8 sm:mt-20'>
            <h1 className='text-brandOrange my-4 text-xl font-semibold'>Edit your Profile</h1>
            <div className='sm:flex flex-row gap-10'>
            <div className='sm:w-1/2'>
                <label htmlFor="fname">First Name</label><br />
                <input type="text" name="fname" id="fname" placeholder='Md' className='rounded bg-gray-100 px-4 py-2 mb-4 w-full focus:outline-none' /><br />
                <label htmlFor="email">Last Name</label><br />
                <input type="text" name='email' id='email' placeholder='kjsn@gmail.com' className='rounded bg-gray-100 px-4 py-2 mb-4 w-full focus:outline-none'/><br />
            </div>
            <div className='sm:w-1/2'>
                <label htmlFor="lname">Email</label><br />
                <input type="text" name="lname" id="lname" className='rounded bg-gray-100 px-4 py-2 mb-4 w-full focus:outline-none'/><br />
                <label htmlFor="address">Address</label><br />
                <input type="text" name='address' id='address' className='rounded bg-gray-100 px-4 py-2 mb-4 w-full focus:outline-none'/><br />
            </div>
            </div>
            <div>
                <h1>Password Changes</h1>
                <input type="password" placeholder='Current password' className='rounded bg-gray-100 px-4 py-2 mb-4 w-full focus:outline-none'/><br />
                <input type="password" placeholder='New password' className='rounded bg-gray-100 px-4 py-2 mb-4 w-full focus:outline-none' /><br />
                <input type="password" placeholder='Confirm New Password' className='rounded bg-gray-100 px-4 py-2 mb-4 w-full focus:outline-none'/><br />
            </div> 
            <div className='flex flex-row justify-end gap-10'>
                <button className='px-8 py-2'>Cancel</button>
                <button className='border rounded border-red-400 px-4 py-2 text-nowrap bg-brandOrange text-white'>Save Changes</button>
            </div>
        </div>
        </div>
    <Footer/>
    </div>
  )
}

export { Profile };
export default Account;
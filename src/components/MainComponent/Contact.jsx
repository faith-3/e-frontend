import React from 'react'
import { HiOutlinePhone } from "react-icons/hi";
import { GoMail } from "react-icons/go";
import Nav from '../Navbar/Nav';
import { Description, Field, Label, Textarea } from '@headlessui/react'
import clsx from 'clsx'

const Contact = () => {
  return (
    <div className='container'>
    <Nav />
    <div className='text-gray-600'><span className='font-light'>Home /</span> Contact us</div>
    <div className='flex flex-col-reverse xl:flex-row xl:w-100 h-full mt-10 gap-10 text-xl xl:text-lg mb-40'>
        <div className='xl:w-1/4 mt-8 border p-4 border-gray-200 rounded'>
            <div className='mb-8 py-8 border-b w-100  border-gray-400'>
                <div className='flex flex-row gap-4 py-3'>
                <div className='border rounded-full bg-red-400 text-white w-10 h-10'>
                <HiOutlinePhone className='m-3'/>
                </div>
                <h1 className='mt-2'>Call To Us</h1>
                </div>
                <p>We are available 24/7, 7days a week</p>
                <p>Phone:+250 788 888 888</p>
            </div>
            <div className='mb-8 '>
                <div className='flex flex-row gap-4 py-3'>
                <div className='border rounded-full bg-red-400 text-white w-10 h-10'>
                <GoMail className='m-3'/>
                </div>
                <h1 className='mt-2'>Write To Us</h1>
                </div>
                <div>
                <p className='pb-2'>Fill our form and we will contact you within 24 hours</p>
                <p className='pb-2'>Email: customer@exclusive.com</p>
                <p className='pb-2'>Email: support@exclusive.com</p>
                </div>
            </div>
        </div>
        <div className='w-100 xl:w-3/4 border border-gray-200 rounded'>
            <div className='flex flex-col xl:flex-row gap-10 p-4'>
                <input type="text" placeholder='Your name' className='rounded w-full px-4 py-6 xl:px-4 xl:py-2 bg-gray-100 xl:w-3/4 focus:outline-none'/>
                <input type="text" placeholder='Your email' className='rounded w-full px-4 py-6 xl:px-4 xl:py-2 bg-gray-100 xl:w-3/4  focus:outline-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500'/>
                <input type="text" placeholder='Your phone' className='rounded w-full px-4 py-6 xl:px-4 xl:py-2 focus:outline-none bg-gray-100 xl:w-3/4'/>
            </div>
            <div className='mx-4 my-8 rounded'>
      <Field>
        <Textarea
        placeholder='Your message'
          className={clsx(
            'block w-full resize-none rounded-lg border-none bg-gray-100 px-6 py-2 h-80',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2  ' 
          )}
          rows={3}
        />
      </Field>
    </div>            
            <div className=' flex flex-row justify-end lg:mr-4'>
                <button className='px-4 xl:px-8 py-2 xl:py-2 mb-2 mt-4 bg-brandOrange text-white font-white rounded'>Send Message</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
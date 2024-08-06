import { useState } from 'react'
import vector1 from '../../assets/images/vector2.png'
import boy from '../../assets/images/cart.png'
import { CgLoadbar } from "react-icons/cg";
import Google from '../../assets/images/Google.png'
import { Link } from 'react-router-dom'
import { Checkbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import Footer from '../MainComponent/Footer/Footer';
import init from '../../assets/images/init.png'


const Login = () => {
  const [enabled, setEnabled] = useState(true)
  return (
    <div>
    <div className="container overflow-hidden bg-white text-primary font-sans leading-normal tracking-normal  select-none">
    <nav className="static">
    <div className="w-full relative flex justify-center items-center">
    <img src={vector1} alt="Vector" className="hidden sm:block absolute -right-40 -top-0 w-1/2" />
    </div>
    <div className="flex justify-between relative py-4 z-30">
    <div className="w-1/4 font-semibold text-xl text-nowrap">All in Rwanda</div>
    <div className="w-3/4 flex flex-row gap-10 mr-44 justify-end font-semibold">
    <a href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    <a href="#login" className='text-nowrap'>Sign Up</a>
    <span>    
      <a href="#signup">Login</a>
      <CgLoadbar className='text-2xl ml-3 text-brandOrange -mt-1'/>
    </span>
    </div>
    </div>
    </nav>
    <div className="flex flex-col md:flex-row sm:mt-10">
    <div className="flex flex-col w-full lg:w-1/2 items-start space-y-4 ">
    <h1 className=' w-full sm:w-96 text-center font-medium text-xl'>Welcome to All in Rwanda</h1>
    <button className='flex flex-row border rounded text-md w-full sm:w-96 py-3 justify-center font-semibold border-brandOrange text-brandOrange'><span><img src={Google} alt="" className='mr-2'/></span>Sign in with Google</button>
    <div className='flex ml-2 py-8'>
    <hr className='w-40 sm:w-36 border-primary'/>
     <p className='w-6 sm:w-20 -mt-3 text-center'>OR</p>
    <hr className='w-40 sm:w-36 border-primary'/>
    </div>
    <form action="" className='space-y-4 w-full'>
    <label className="block">
    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 py-2">
    Email
    </span>
    <input type="email" name="email" className="mt-1 p-3 selection:bg-brandGrey selection:text-white bg-white shadow-sm border-brandGrey border-2 focus:border placeholder-slate-400 focus:outline-none focus:border-brandOrange focus:ring-brandOrange block w-full rounded-md sm:text-sm focus:ring-1"/>
    </label>
    <label className="block">
    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 py-2">
    Password
    </span>
    <input type="password" name="pword" className="mt-1 p-3 selection:bg-brandGrey selection:text-white bg-white shadow-sm border-brandGrey border-2 focus:border placeholder-slate-400 focus:outline-none focus:border-brandOrange focus:ring-brandOrange block w-full rounded-md sm:text-sm focus:ring-1"/>
    </label>
        <div className='pt-4 space-y-4'>
        <span className='flex flex-row text-md space-x-2 mt-4'>
        <Checkbox
      checked={enabled}
      onChange={setEnabled}
      className="group size-6 rounded-md bg-white p-1 ring-1 ring-primary data-[checked]:ring-brandOrange ring-inset data-[checked]:bg-brandOrange"
    >
      <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
    </Checkbox> 
    <div className='mb-4 '>
      <p className='font-medium'>I accept all <span className='text-brandOrange'>Terms</span> and <span className='text-brandOrange'>Conditions</span></p>
    </div>
    </span>
        <button className='text-sm font-semibold bg-brandOrange text-white px-20 w-full sm:w-96 py-3 rounded'>START SHOPPING</button> 
        <p  className='text-brandOrange text-sm text-center font-semibold'>
        <a href='Signup.jsx'> Don't have an account?</a>
        </p>
        </div>
    </form>
    </div>
    <div className="w-100 absolute lg:w-2/3 mt-4">
    <img src={init} alt="" />
    <img src={boy} alt="Shopping" className="hidden sm:block relative z-30 w-full top-20 -right-10" />
    </div>
    </div>
    </div>
    <div className='hidden sm:block'>
    <Footer/>
    </div>
    </div>
  )
}

export default Login
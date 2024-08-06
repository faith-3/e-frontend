import React from 'react'
import image from '../../../assets/images/image.jpg'

const Ad = () => {
  return (
    <div>
        <div className='bg-black text-white h-full ml-4 mr-2 mb-4 md:ml-10 md:my-10 p-10'>
            <h1 className='text-green-300 text-xs font-sans'>Categories </h1>
            <div className='flex flex-col md:flex-row-reverse justify-between'>
            <div className='md:w-1/3 flex items-center justify-center mt-4 md:mt-0'>
                <img src={image} />
                </div>
                <div className='w-1/2 mt-10 sm:mt-8'>
                    <h1 className='text-2xl sm:text-4xl'>Enhance Your bathroom Experience</h1>
                <div className='flex flex-row gap-4'>
                    <p className='flex flex-col items-center justify-center gap-0 w-20 h-20 bg-white rounded-full text-black text-xl font-semibold sm:font-bold text-sans mt-8'>23<span className='text-xs'>Days</span></p>
                    <p className='flex flex-col items-center justify-center gap-0 w-20 h-20 bg-white rounded-full text-black text-xl font-semibold sm:font-bold text-sans mt-8'>14<span className='text-xs'>Hours</span></p>
                    <p className='flex flex-col items-center justify-center gap-0 w-20 h-20 bg-white rounded-full text-black text-xl font-semibold sm:font-bold text-sans mt-8'>45<span className='text-xs'>Minutes</span></p>
                    <p className='flex flex-col items-center justify-center gap-0 w-20 h-20 bg-white rounded-full text-black text-xl font-semibold sm:font-bold text-sans mt-8'>15<span className='text-xs'>Seconds</span></p>
                </div>
                <button className='py-3 px-8 bg-green-400 hover:bg-green-600 focus:bg-green-400 mt-6 rounded'>Buy now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ad
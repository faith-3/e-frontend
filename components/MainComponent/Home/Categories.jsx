import React from 'react'
import furniture from '../../../assets/images/furniture.png'
import shower from '../../../assets/images/shower.png'
import toilet from '../../../assets/images/toilet.png'

const CategoryList = [
  { id: 1, category: 'Furniture ', img:furniture, },
  { id: 1, category: 'Showers', img:shower },
  { id: 1, category: 'Toilets', img:toilet },
  { id: 1, category: 'Water tapes' },
  { id: 1, category: 'Lights' },
  { id: 1, category: 'Tiles' },
  { id: 1, category: 'Furniture' },
  { id: 1, category: 'Furniture' },
  { id: 1, category: 'Furniture' },
  { id: 1, category: 'Furniture' },
  { id: 1, category: 'Furniture' },
  { id: 1, category: 'Furniture' },
  { id: 1, category: 'Furniture' },
  { id: 1, category: 'Furniture' },
  // Other categories...
];

const Categories = () => {
  return (
    <div className='space-y-4'>
      <h1 className='border rounded w-6 py-3 bg-brandOrange'><span className='ml-10 font-semibold text-brandOrange'>Categories</span></h1>

        <h1 className='text-xl font-semibold sm:font-normal md:text-xl'>Browse By Category</h1>
      <div>
        <ul className='flex flex-row gap-3 overflow-x-auto'>
          {CategoryList.map((data, index) => (
            <li key={index} className={`flex flex-col border rounded ${index === 3 ? 'bg-red-500 border-none' : ''}`}>            
            <div className='w-32 h-24 flex flex-col items-center mt-4 mx-4'>
              <img src={data.img} alt="" className='w-20 flex  object-contain'/>
              </div>
              <a href={data.link} className={`inline-block text-sm text-center text-serif font-semibold text-nowrap duration-200 pb-4 ${index === 3 ? 'text-white' : 'text-black'}`}>{data.category}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Categories

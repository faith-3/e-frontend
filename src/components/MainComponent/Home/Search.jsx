import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useState } from "react";


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

function Example() {
  const [isOpen, setIsOpen] = useState(null);

  const handleToggle = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className="sm:container ml-2 mt-20 w-full">
      <div className="flex justify-between space-x-2 h-10 w-full -ml-2 px-2 rounded py-1 outline-none border border-brandGrey">
        <span className="flex w-full space-x-2 "> 
        <div className="">
      <div className="">
        <Disclosure as="div">
          <DisclosureButton className="group  w-full items-center">
            < HiOutlineBars3 className="size-5 fill-black sm:hidden mt-1.5" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 ml-8 text-sm/5 text-black">
          <div className='sm:block sm:w-1/4 mt-4 text-nowrap bg-white h-100 right-14 top-16 absolute z-30 left-0 bottom-0 pl-4 font-medium sm:my-10 text-brandGrey'>
          <div className=''>
          <span className="font-normal text-black">
        <input className="border-b border-brandGrey py-2.5 w-full outline-none pl-4 placeholder:text-black" placeholder="Search"/>
      </span>
      <ul className='sm:flex md:flex-col overflow-x-auto md:w-1/4'>
   
        {Links.map((data, index) => (
          <li key={index} className='flex flex-col text-nowrap py-4'>
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
    </div>
         
        </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
        <input
          type="text"
          name="search-form"
          id="search-form"
          className="focus:outline-none w-full placeholder:text-primary "
          placeholder="Type here to Search"
        />
        </span>
      <IoSearchOutline className="sm:size-6 mt-1"/>
      </div>
    </div>
  );
}

export default Example;
